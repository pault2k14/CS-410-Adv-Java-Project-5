package edu.pdx.cs410J.whitlock.client;

import com.google.gwt.i18n.shared.DateTimeFormat;
import com.google.gwt.i18n.shared.DefaultDateTimeFormatInfo;
import edu.pdx.cs410J.AbstractAppointment;

import java.io.Serializable;
import java.text.ParseException;
import java.util.Date;

public class Appointment extends AbstractAppointment implements Comparable<Appointment>, Serializable
{

    private Date beginTime;
    private Date endTime;
    private String description;

    public Appointment() {

    }

        /**
         * This constructor instantiates an appointment object.
         * @param newDescription - The description for the appointment as a string.
         * @param newBeginTime - The starting time for the appointment as a string
         *                     in the format of M(M)/d(d)/yyyy HH:mm
         * @param newEndTime - The ending time for the appointment as a string
         *                   in the format of M(M)/d(d)/yyyy HH:mm
         */
    public Appointment(String newDescription, String newBeginTime, String newEndTime) {

        // Attempt to parse the begin date and time to ensure that they
        // are valid dates and times.
        try {
            this.beginTime = parseAppointmentDateTime(newBeginTime);
        }
        catch (ParseException e) {
            System.err.println("Begin date and time format is incorrect.");
        }

        // Attempt to parse the end date and time to ensure that they
        // are valid dates and times.
        try {
            this.endTime = parseAppointmentDateTime(newEndTime);
        }
        catch (ParseException e) {
            System.err.println("End date and time format is incorrect.");
        }

        this.description = newDescription;

    }

    private String formatDate(Date date) {
        String pattern = "yyyy/MM/dd hh:mm a";
        return DateTimeFormat.getFormat(pattern).format(date);
    }

    /**
     * Parses a string based on how an appointment date and time should
     * be formatted.
     * @param appointmentDateTime - String containing the appointment date and time.
     * @return - Returns the parsed Date object.
     * @throws ParseException - Thrown when it is not possible to parse the
     *                          passed in appointmentDateTime string.
     */
    static public Date parseAppointmentDateTime(String appointmentDateTime) throws ParseException {

        String timeDateFilter = "\\d\\d?/\\d\\d?/\\d\\d\\d\\d \\d\\d?:\\d\\d (am|pm)";
        Date parsedDate = null;

        if(appointmentDateTime == null) {
            throw new ParseException("Unable to parse a null date!", 0);
        }

        if(!appointmentDateTime.matches(timeDateFilter)) {
            throw new ParseException("Date and time in incorrect format.", 0);
        }

        // Attempt to parse the begin date and time to ensure that they
        // are valid dates and times.
        String pattern = "M/d/yy h:mm a";
        DefaultDateTimeFormatInfo info = new DefaultDateTimeFormatInfo();
        DateTimeFormat dtf = new DateTimeFormat(pattern, info) {};
        parsedDate = dtf.parse(appointmentDateTime);
        // parsedDate = shortDateFormat.parse(appointmentDateTime);

        if(parsedDate == null) {
            throw new ParseException("Unable to parse date!", 0);
        }

        return parsedDate;
    }

    /**
     * Compares whether the current Appointment is before, equal, or after
     * the passed in appointment.
     * @param appointment - The Appointment object to compare to the current
     *                      Appointment object.
     * @return Returns the equivalence between the two appointment objects
     *         -1 if this appointment occurs before the compared appointment,
     *         0 if this appointment is equal to the compared appointment,
     *         1 if this appointment occurs after the compared appointment.
     */
    public int compareTo(Appointment appointment) {

        final int BEFORE = -1;
        final int AFTER = 1;
        final int EQUAL = 0;

        // Check the relationship between beginTime for both
        // appointment objects.
        if(this.beginTime.before(appointment.beginTime)) {
            return BEFORE;
        }

        if(this.beginTime.after(appointment.beginTime)) {
            return AFTER;
        }

        // If beginTime is equal then we need to check
        // the relationship between the endTime for the
        // appointments.
        if(this.beginTime.equals(appointment.beginTime)) {

            if(this.endTime.before(appointment.endTime)) {
                return BEFORE;
            }

            if(this.endTime.after(appointment.endTime)) {
                return AFTER;
            }

            // If endTime is equal, ew now need to check
            // the relationship of the description between
            // the appointments.
            if(this.endTime.equals(appointment.endTime)) {

                if(this.description.compareTo(appointment.description) <= -1) {
                    return BEFORE;
                }

                if(this.description.compareTo(appointment.description) >= 1) {
                    return AFTER;
                }

                if(this.description.equals(appointment.description)) {
                    return EQUAL;
                }

            }
        }

        return EQUAL;
    }

    /**
     * Returns the current appointments beginTime Date object.
     * @return endTime - the current appointment's beginTime Date object.
     */
    @Override
    public Date getBeginTime() {
        return this.beginTime;
    }

    /**
     * Returns the current appointments endTime Date object.
     * @return endTime - the current appointment's endTime Date object.
     */
    @Override
    public Date getEndTime() {
        return this.endTime;
    }
    /**
     * Returns the a string representing the begin time of the appointment in the
     * form of M/d/yy h:mm a
     * @return - Returns a string representing the beginning time of an appointment.
     */
    @Override
    public String getBeginTimeString() {

        // Format the begin time and return it as a string.
        DateTimeFormat shortDateTimeFormat = DateTimeFormat.getFormat("MM/dd/yyyy hh:mm a");
        String stringShortDateTimeFormat = shortDateTimeFormat.format(this.beginTime);
        return stringShortDateTimeFormat;
    }

    /**
     * Returns the a string representing the end time of the appointment in the
     * form of M/d/yy h:mm a
     * @return - Returns a string representing the ending time of an appointment.
     */
    @Override
    public String getEndTimeString() {

        // Format the end time and return it as a string.
        DateTimeFormat shortDateTimeFormat = DateTimeFormat.getFormat("MM/dd/yyyy hh:mm a");
        String stringShortDateTimeFormat = shortDateTimeFormat.format(this.endTime);
        return stringShortDateTimeFormat;
    }

    /**
     * Returns the description field of the appointment class object.
     * @return - Returns a string representing the description of an appointment.
     */
    @Override
    public String getDescription() {
        return this.description;
    }


}
