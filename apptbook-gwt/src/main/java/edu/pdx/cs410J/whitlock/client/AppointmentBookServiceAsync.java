package edu.pdx.cs410J.whitlock.client;

import com.google.gwt.user.client.rpc.AsyncCallback;

/**
 * The client-side interface to the ping service
 */
public interface AppointmentBookServiceAsync {

    void createAppointmentBook(String ownerName, String description, String beginTime, String endTime, AsyncCallback<Appointment> async);
    void viewAppointmentBook(String ownerName, AsyncCallback<AppointmentBook> async);
    void searchAppointmentBook(String ownerName, String beginTime, String endTime, AsyncCallback<AppointmentBook> async);
}
