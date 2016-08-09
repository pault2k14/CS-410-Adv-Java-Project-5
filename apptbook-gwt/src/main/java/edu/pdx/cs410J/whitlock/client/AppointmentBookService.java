package edu.pdx.cs410J.whitlock.client;

import com.google.gwt.user.client.rpc.RemoteService;
import com.google.gwt.user.client.rpc.RemoteServiceRelativePath;

/**
 * A GWT remote service that returns a dummy appointment book
 */
@RemoteServiceRelativePath("appointments")
public interface AppointmentBookService extends RemoteService {

    public Appointment createAppointmentBook(String ownerName, String description, String beginTime, String endTime);
    public AppointmentBook viewAppointmentBook(String ownerName);
    public AppointmentBook searchAppointmentBook(String ownerName, String beginTime, String endTime);
}
