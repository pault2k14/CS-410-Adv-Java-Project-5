package edu.pdx.cs410J.whitlock.server;

import com.google.gwt.user.server.rpc.RemoteServiceServlet;
import edu.pdx.cs410J.whitlock.client.Appointment;
import edu.pdx.cs410J.whitlock.client.AppointmentBook;
import edu.pdx.cs410J.whitlock.client.AppointmentBookService;

/**
 * The server-side implementation of the division service
 */
public class AppointmentBookServiceImpl extends RemoteServiceServlet implements AppointmentBookService
{
  @Override
  public AppointmentBook createAppointmentBook(String ownerName, String description, String beginTime, String endTime) {
      // AppointmentBook book = new AppointmentBook();
      AppointmentBook book = new AppointmentBook(ownerName);
      Appointment appointment = new Appointment(description, beginTime, endTime);
      book.addAppointment(appointment);
    // for (int i = 0; i < numberOfAppointments; i++) {
     // book.addAppointment(new Appointment());
    //}
    return book;
  }

  @Override
  protected void doUnexpectedFailure(Throwable unhandled) {
    unhandled.printStackTrace(System.err);
    super.doUnexpectedFailure(unhandled);
  }

}
