package edu.pdx.cs410J.whitlock.client;

import edu.pdx.cs410J.AbstractAppointment;
import edu.pdx.cs410J.AbstractAppointmentBook;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;

public class AppointmentBook extends AbstractAppointmentBook implements Serializable
{
    private String owner;
    private ArrayList<Appointment> appointments;

    public AppointmentBook() {

    }


        /**
         * Instantiates a new AppointmentBook object.
         * @param newOwner - The name of the owner of the newly created appointment book.
         */
    public AppointmentBook(String newOwner) {
        this.owner = newOwner;
        this.appointments = new ArrayList<>();
    }

    /**
     * Returns the name of owner of the appointment book.
     * @return - The owner object, the name of the owner of the appointment book as a String.
     */
    public String getOwnerName() {
        return this.owner;
    }

    /**
     * Returns a list of appointments in the appointment book.
     * @return - The appointments object, a list of appointments in the appointment
     * book as a collection.
     */
    public Collection getAppointments() {
        return this.appointments;
    }

    /**
     * Adds an appointment to the appointment book.
     * @param var1 - Any object extending AbstractAPpointment, this will be
     *             added to the appointment book.
     */
    public void addAppointment(AbstractAppointment var1) {
        this.appointments.add((Appointment) var1);
        Collections.sort(this.appointments);
    }

}
