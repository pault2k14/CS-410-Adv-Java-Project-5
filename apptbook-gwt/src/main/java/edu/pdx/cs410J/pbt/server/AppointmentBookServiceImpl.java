package edu.pdx.cs410J.pbt.server;

import com.google.gwt.user.server.rpc.RemoteServiceServlet;
import edu.pdx.cs410J.pbt.client.Appointment;
import edu.pdx.cs410J.pbt.client.AppointmentBook;
import edu.pdx.cs410J.pbt.client.AppointmentBookService;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Collection;
import java.util.Date;

/**
 * The server-side implementation of the division service
 */
public class AppointmentBookServiceImpl extends RemoteServiceServlet implements AppointmentBookService
{
    AppointmentBook appointmentBook = null;

  @Override
  public Appointment createAppointmentBook(String ownerName, String description, String beginTime, String endTime) {

      if(appointmentBook == null) {
          appointmentBook = new AppointmentBook(ownerName);
      }

      Appointment appointment = new Appointment(description, beginTime, endTime);
      appointmentBook.addAppointment(appointment);

      return appointment;
  }

    @Override
    public AppointmentBook viewAppointmentBook(String ownerName) {

        if(this.appointmentBook == null) {
            doUnexpectedFailure(new NullPointerException("No appointment book exists!"));
        }
        else if(!this.appointmentBook.getOwnerName().equals(ownerName)) {
            return new AppointmentBook(ownerName);
        }

        return this.appointmentBook;
    }

    @Override
    public AppointmentBook searchAppointmentBook(String ownerName, String beginTime, String endTime) {

        Date beginDate = null;
        Date endDate = null;

        if(this.appointmentBook == null) {
            doUnexpectedFailure(new NullPointerException());
        }
        else if(!this.appointmentBook.getOwnerName().equals(ownerName)) {
            return new AppointmentBook(ownerName);
        }

        // Before we search for appoinments we need
        // to convert our date strings to dates.
        SimpleDateFormat dateFormat = new SimpleDateFormat("MM/dd/yyyy hh:mm a");
        dateFormat.setLenient(false);


        // Attempt to parse the begin date and time to ensure that they
        // are valid dates and times.
        try {
            beginDate = dateFormat.parse(beginTime);
        }
        catch (ParseException e) {
            System.out.println("Begin date and time format is incorrect.");
            return null;
        }

        // Attempt to parse the begin date and time to ensure that they
        // are valid dates and times.
        try {
            endDate = dateFormat.parse(endTime);
        }
        catch (ParseException e) {
            System.out.println("End date and time format is incorrect.");
            return null;
        }

        // Make a temporary appointment book so we can
        // dump it using pretty printer.
        Collection<Appointment> appointments = appointmentBook.getAppointments();
        AppointmentBook tempBook = new AppointmentBook(ownerName);

        for(Appointment appt: appointments) {

            if(appt.getBeginTime().compareTo(beginDate) == 1 || appt.getBeginTime().compareTo(beginDate) == 0 ) {

                if(appt.getEndTime().compareTo(endDate) == -1 || appt.getEndTime().compareTo(endDate) == 0) {
                    tempBook.addAppointment(appt);
                }
            }
        }

        return tempBook;
    }

  @Override
  protected void doUnexpectedFailure(Throwable unhandled) {
    unhandled.printStackTrace(System.err);
    super.doUnexpectedFailure(unhandled);
  }

}
