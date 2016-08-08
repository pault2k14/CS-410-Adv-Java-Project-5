package edu.pdx.cs410J.whitlock.client;

import com.google.gwt.user.client.rpc.AsyncCallback;

/**
 * The client-side interface to the ping service
 */
public interface AppointmentBookServiceAsync {

  /**
   * Return the current date/time on the server
   */

  void createAppointmentBook(String ownerName, String description, String beginTime, String endTime, AsyncCallback<AppointmentBook> async);

}
