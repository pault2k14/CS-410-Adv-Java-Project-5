package edu.pdx.cs410J.pbt.server;

import com.google.gwt.user.server.rpc.RemoteServiceServlet;
import edu.pdx.cs410J.pbt.client.Appointment;
import edu.pdx.cs410J.pbt.client.AppointmentBook;
import edu.pdx.cs410J.pbt.client.AppointmentBookService;

import java.rmi.ServerException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Collection;
import java.util.Date;

/**
 * The server-side implementation of the division service
 */
public class AppointmentBookServiceImpl extends RemoteServiceServlet implements AppointmentBookService
{
    private AppointmentBook appointmentBook = null;

    /**
     * Creates new appointment in an appointment book.
     * @param ownerName - owner of the appointment book to add
     *                  the appointment to.
     * @param description - Description of the new appointment.
     * @param beginTime - Begin date and time of the new appointment.
     * @param endTime - End date and time of the new appointment.
     * @return The newly created Appointment.
     */
    @Override
    public Appointment createAppointmentBook(String ownerName, String description, String beginTime, String endTime) {

        // Check if parameters are null or blank, if so
        // throw an exception.
        if(ownerName == null || ownerName.equals("")) {
            doUnexpectedFailure(new ServerException("Owner name blank or null!"));
        }

        if(description == null || description.equals("")) {
            doUnexpectedFailure(new ServerException("Description blank or null!"));
        }

        if(beginTime == null || beginTime.equals("")) {
            doUnexpectedFailure(new ServerException("begin time blank or null!"));
        }

        if(endTime == null || endTime.equals("")) {
            doUnexpectedFailure(new ServerException("end time blank or null!"));
        }

        // Build a new appointment book if needed and
        // create then return the appointment.
        if(appointmentBook == null) {
            appointmentBook = new AppointmentBook(ownerName);
        }

        Appointment appointment = new Appointment(description, beginTime, endTime);
        appointmentBook.addAppointment(appointment);

        return appointment;
    }

    /**
     * Returns all appointments in an appointment book owned
     * by the specified owner.
     * @param ownerName - The name of the owner of the appointment
     *                  book to return.
     * @return An AppointmentBook with all appointments of the
     *         specified owner.
     */
    @Override
    public AppointmentBook viewAppointmentBook(String ownerName) {

        if(ownerName == null || ownerName.equals("")) {
            doUnexpectedFailure(new ServerException("Owner name blank or null!"));
        }

        // If an appointment book does not exist throw an exception
        // if it does btut doesn't match the parameter owner name
        // return a new appointment book, otherwise
        // return the current appointment book.
        if(this.appointmentBook == null) {
            return new AppointmentBook(ownerName);
        }
        else if(!this.appointmentBook.getOwnerName().equals(ownerName)) {
            return new AppointmentBook(ownerName);
        }

        return this.appointmentBook;
    }

    /**
     * Returns appointments between the specified begin date and time and
     * the end the end date and time, from an appointment book that is
     * owned by the specified owner.
     * @param ownerName - The name of the owner of the appointment book
     *                  to search.
     * @param beginTime - The begin date and time of appointments to
     *                  search for.
     * @param endTime - The end date and time of appointments to
     *                search for.
     * @return An AppointmentBook containing the appointments that matched
     *         the specified search terms.
     */
    @Override
    public AppointmentBook searchAppointmentBook(String ownerName, String beginTime, String endTime) {

        Date beginDate = null;
        Date endDate = null;

        // Check to see if the parameters are null or blank.
        if(ownerName == null || ownerName.equals("")) {
            doUnexpectedFailure(new ServerException("Owner name blank or null!"));
        }

        if(beginTime == null || beginTime.equals("")) {
            doUnexpectedFailure(new ServerException("begin time blank or null!"));
        }

        if(endTime == null || endTime.equals("")) {
            doUnexpectedFailure(new ServerException("end time blank or null!"));
        }

        if(this.appointmentBook == null) {
            return new AppointmentBook(ownerName);
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
            doUnexpectedFailure(new ServerException("Begin date and time format is incorrect."));
        }

        if(beginDate == null) {
            doUnexpectedFailure(new ServerException("Begin date and time format is incorrect."));
        }

        // Attempt to parse the begin date and time to ensure that they
        // are valid dates and times.
        try {
            endDate = dateFormat.parse(endTime);
        }
        catch (ParseException e) {
            doUnexpectedFailure(new ServerException("End date and time format is incorrect."));
        }

        if(endDate == null) {
            doUnexpectedFailure(new ServerException("End date and time format is incorrect."));
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

    /**
     * Returns an error when an exception is passed into it.
     * @param unhandled - THe exception that caused the error.
     */
    @Override
    protected void doUnexpectedFailure(Throwable unhandled) {
        unhandled.printStackTrace(System.err);
        super.doUnexpectedFailure(unhandled);
    }

}
