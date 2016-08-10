package edu.pdx.cs410J.pbt.client;

import com.google.gwt.user.client.rpc.RemoteService;
import com.google.gwt.user.client.rpc.RemoteServiceRelativePath;

/**
 * A GWT remote service that allows for the creation of
 * an appointment, viewing for all appointments in an
 * appointment book, or searching for appointments between
 * a partticular begin time and end time.
 */
@RemoteServiceRelativePath("appointments")
public interface AppointmentBookService extends RemoteService {

    /**
     * Creates new appointment in an appointment book.
     * @param ownerName - owner of the appointment book to add
     *                  the appointment to.
     * @param description - Description of the new appointment.
     * @param beginTime - Begin date and time of the new appointment.
     * @param endTime - End date and time of the new appointment.
     * @return The newly created Appointment.
     */
    public Appointment createAppointmentBook(String ownerName, String description, String beginTime, String endTime);

    /**
     * Returns all appointments in an appointment book owned
     * by the specified owner.
     * @param ownerName - The name of the owner of the appointment
     *                  book to return.
     * @return An AppointmentBook with all appointments of the
     *         specified owner.
     */
    public AppointmentBook viewAppointmentBook(String ownerName);

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
    public AppointmentBook searchAppointmentBook(String ownerName, String beginTime, String endTime);
}
