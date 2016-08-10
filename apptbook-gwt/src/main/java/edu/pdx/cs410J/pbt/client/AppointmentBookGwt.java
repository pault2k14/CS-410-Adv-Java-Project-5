package edu.pdx.cs410J.pbt.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.Command;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.*;

import java.util.Collection;

/**
 * Project 5 GWT class, allows user to use a client
 * to create a new appointment book, a new appointment,
 * search for appointments in an appointment book, and view all appointments in
 * an appointment book.
 */
public class AppointmentBookGwt implements EntryPoint {

    private final Alerter alerter;
    private String timeDateFilter = "\\d\\d?/\\d\\d?/\\d\\d\\d\\d \\d\\d?:\\d\\d (am|pm)";
    private HTML resultHTML = null;
    private TextBox textBox = null;
    private TextBox createAppointmentOwnerNameBox = null;
    private TextBox createAppointmentBeginTimeBox = null;
    private TextBox createAppointmentEndTimeBox = null;
    private TextArea createAppointmentDescriptionArea = null;
    private TextBox viewAppointmentsOwnerNameBox = null;
    private TextBox searchAppointmentsOwnerNameBox = null;
    private TextBox searchAppointmentsBeginTimeBox = null;
    private TextBox searchAppointmentsEndTimeBox = null;

    /**
     * Public Constructor for class, sets up window alert for use
     * in the session.
     */
    public AppointmentBookGwt() {
        this(new Alerter() {
            @Override
            public void alert(String message) {
        Window.alert(message);
      }
        });
    }

    /**
     * PrivateConstructor for class, sets up window alert for use
     * in the session.
     */
    private AppointmentBookGwt(Alerter alerter) {
        this.alerter = alerter;
    }

    /**
     * Creates and sends a request to the server to
     * create a new appointment.
     */
    private void createAppointments() {

        AppointmentBookServiceAsync async = GWT.create(AppointmentBookService.class);

        // Grab the values from our user input objects.
        String ownerName = this.createAppointmentOwnerNameBox.getText();
        String description = this.createAppointmentDescriptionArea.getText();
        String beginTime = this.createAppointmentBeginTimeBox.getText();
        String endTime = this.createAppointmentEndTimeBox.getText();

        // Validate the fields
        if(ownerName == null || ownerName.length() < 1) {
            alerter.alert("Owner name field cannot be empty.");
            return;
        }

        if(description == null || description.length() < 1) {
            alerter.alert("Description field cannot be empty.");
            return;
        }

        if(!beginTime.matches(timeDateFilter)) {
            alerter.alert("Begin time field must be in the format of: \n M(M)/d(d)/yyyy h(h):mm am|pm");
            return;
        }

        if(!endTime.matches(timeDateFilter)) {
            alerter.alert("End time field must be in the format of: \n M(M)/d(d)/yyyy h(h):mm am|pm");
            return;
        }

        // Send our asyncronous request.
        async.createAppointmentBook(ownerName, description, beginTime, endTime, new AsyncCallback<Appointment>() {

          @Override
          public void onSuccess(Appointment appointment) {
              displayCreatedAppointment(appointment);
          }

          @Override
          public void onFailure(Throwable ex) {
              alert(ex);
          }
      });
    }

    /**
     * Creates nnd sends a request to the server to
     * search for appointments between a specific
     * date range in an appointment book.
     */
    private void searchAllAppointments() {

        AppointmentBookServiceAsync async = GWT.create(AppointmentBookService.class);

        // Grab the values of our user input.
        String ownerName = this.searchAppointmentsOwnerNameBox.getText();
        String beginTime = this.searchAppointmentsBeginTimeBox.getText();
        String endTime = this.searchAppointmentsEndTimeBox.getText();

        // Validate the fields
        if(ownerName == null || ownerName.length() < 1) {
            alerter.alert("Owner name field cannot be empty.");
            return;
        }

        if(!beginTime.matches(timeDateFilter)) {
            alerter.alert("Begin time field must be in the format of: \n M(M)/d(d)/yyyy h(h):mm am|pm");
            return;
        }

        if(!endTime.matches(timeDateFilter)) {
            alerter.alert("End time field must be in the format of: \n M(M)/d(d)/yyyy h(h):mm am|pm");
            return;
        }

        // Send our asyncronous request.
        async.searchAppointmentBook(ownerName, beginTime, endTime, new AsyncCallback<AppointmentBook>() {

            @Override
            public void onSuccess(AppointmentBook appointmentBook) {
                prettyPrintApptBook(appointmentBook);
            }

            @Override
            public void onFailure(Throwable ex) {
                alert(ex);
            }
        });
    }

    /**
     * Creates nnd sends a request to the server to
     * view all appointments between in an appointment book.
     */
    private void viewAllAppointments() {

        AppointmentBookServiceAsync async = GWT.create(AppointmentBookService.class);
        String ownerName = this.viewAppointmentsOwnerNameBox.getText();

        // Validate the fields
        if(ownerName == null || ownerName.length() < 1) {
            alerter.alert("Owner name field cannot be empty.");
            return;
        }

        // Send our asyncronous request.
        async.viewAppointmentBook(ownerName, new AsyncCallback<AppointmentBook>() {

            @Override
            public void onSuccess(AppointmentBook appointmentBook) {
                prettyPrintApptBook(appointmentBook);
            }

            @Override
            public void onFailure(Throwable ex) {
                alert(ex);
            }
        });
    }

    /**
     * Modifies UI elements and displays the appointment
     * that was created to the user.
     * @param appointment - THe newly created appointment that
     *                    will be displayed.
     */
    private void displayCreatedAppointment(Appointment appointment) {

        // Print the appointment.
        StringBuilder sb = new StringBuilder();
        sb.append("Appointment created!" + "<BR>");
        sb.append("Owner: " + this.createAppointmentOwnerNameBox.getText() + "<BR>");
        sb.append("Description: " + appointment.getDescription() + "<BR>");
        sb.append("Begin time: " + appointment.getBeginTimeString() + "<BR>");
        sb.append("End time: " + appointment.getEndTimeString() + "<BR>");

        resultHTML.setHTML(sb.toString());
    }

    /**
     * Displays exceptions to the user in a alert window.
     * @param ex - Exception to be shown to the user.
     */
    private void alert(Throwable ex) {
    alerter.alert(ex.toString());
  }

    /**
     * Builds the UI elements that allow a user to
     * create a new appointment.
     * @return verticalPanel - A vertical panel that
     *                         contains the appointment  creation
     *                         UI elements.
     */
    private VerticalPanel createAppointmentWidget() {

        // Create the submit button and it's click event.
        Button createApptSubmitButton = new Button("Submit");
        createApptSubmitButton.addClickHandler(new ClickHandler() {
            @Override
            public void onClick(ClickEvent clickEvent) {
                createAppointments();
            }
        });

        // create the rest of the UI elements.
        this.createAppointmentOwnerNameBox = new TextBox();
        this.createAppointmentDescriptionArea = new TextArea();
        this.createAppointmentBeginTimeBox = new TextBox();
        this.createAppointmentEndTimeBox = new TextBox();

        Label ownerLabel = new Label("Owner name");
        Label descriptionLabel = new Label("Description");
        Label beginTimeLabel = new Label("Begin time");
        Label endTimeLabel = new Label("End time");
        VerticalPanel verticalPanel = new VerticalPanel();
        HorizontalPanel horizontalPanelOwner = new HorizontalPanel();
        HorizontalPanel horizontalPanelDescription = new HorizontalPanel();
        HorizontalPanel horizontalPanelBeginTime = new HorizontalPanel();
        HorizontalPanel horizontalPanelEndTime = new HorizontalPanel();

        horizontalPanelOwner.add(ownerLabel);
        horizontalPanelOwner.add(this.createAppointmentOwnerNameBox);
        horizontalPanelDescription.add(descriptionLabel);
        horizontalPanelDescription.add(this.createAppointmentDescriptionArea);
        horizontalPanelBeginTime.add(beginTimeLabel);
        horizontalPanelBeginTime.add(this.createAppointmentBeginTimeBox);
        horizontalPanelEndTime.add(endTimeLabel);
        horizontalPanelEndTime.add(this.createAppointmentEndTimeBox);

        // Add all of the UI elements to the vertical panel
        // that wil lbe returned.
        verticalPanel.add(horizontalPanelOwner);
        verticalPanel.add(horizontalPanelDescription);
        verticalPanel.add(horizontalPanelBeginTime);
        verticalPanel.add(horizontalPanelEndTime);
        verticalPanel.add(createApptSubmitButton);

        return verticalPanel;
    }

    /**
     * Builds the UI elements that allow a user to
     * search for appointments.
     * @return verticalPanel - A vertical panel that
     *                         contains the appointment search
     *                         UI elements.
     */
    private VerticalPanel searchAllAppointmentsWidget() {

        // Create the submit button and it's click event.
        Button createApptSubmitButton = new Button("Submit");
        createApptSubmitButton.addClickHandler(new ClickHandler() {
            @Override
            public void onClick(ClickEvent clickEvent) {
                searchAllAppointments();
            }
        });

        // create the rest of the UI elements.
        this.searchAppointmentsOwnerNameBox = new TextBox();
        this.searchAppointmentsBeginTimeBox = new TextBox();
        this.searchAppointmentsEndTimeBox = new TextBox();

        Label ownerLabel = new Label("Owner name");
        Label beginTimeLabel = new Label("Begin time");
        Label endTimeLabel = new Label("End time");
        VerticalPanel verticalPanel = new VerticalPanel();
        HorizontalPanel horizontalPanelOwner = new HorizontalPanel();
        HorizontalPanel horizontalPanelBeginTime = new HorizontalPanel();
        HorizontalPanel horizontalPanelEndTime = new HorizontalPanel();

        horizontalPanelOwner.add(ownerLabel);
        horizontalPanelOwner.add(this.searchAppointmentsOwnerNameBox);
        horizontalPanelBeginTime.add(beginTimeLabel);
        horizontalPanelBeginTime.add(this.searchAppointmentsBeginTimeBox);
        horizontalPanelEndTime.add(endTimeLabel);
        horizontalPanelEndTime.add(this.searchAppointmentsEndTimeBox);

        // Add all of the UI elements to the vertical panel
        // that wil lbe returned.
        verticalPanel.add(horizontalPanelOwner);
        verticalPanel.add(horizontalPanelBeginTime);
        verticalPanel.add(horizontalPanelEndTime);
        verticalPanel.add(createApptSubmitButton);

        return verticalPanel;
    }

    /**
     * Builds the UI elements that allow a user to
     * view all appointments.
     * @return verticalPanel - A vertical panel that
     *                         contains the appointment view
     *                         all elements.
     */
    private VerticalPanel viewAllAppointmentsWidget() {

        // Create the submit button and it's click event.
        Button viewApptSubmitButton = new Button("Submit");
        viewApptSubmitButton.addClickHandler(new ClickHandler() {
            @Override
            public void onClick(ClickEvent clickEvent) {
                viewAllAppointments();
            }
        });

        // create the rest of the UI elements.
        this.viewAppointmentsOwnerNameBox = new TextBox();
        Label ownerLabel = new Label("Owner name");
        VerticalPanel verticalPanel = new VerticalPanel();
        HorizontalPanel horizontalPanelOwner = new HorizontalPanel();
        horizontalPanelOwner.add(ownerLabel);
        horizontalPanelOwner.add(this.viewAppointmentsOwnerNameBox);

        // Add all of the UI elements to the vertical panel
        // that wil lbe returned.
        verticalPanel.add(horizontalPanelOwner);
        verticalPanel.add(viewApptSubmitButton);

        return verticalPanel;
    }

    /**
     * Displays a README to the user in a alert dialog box.
     */
    private void showREADME() {

        String readme = "This application allows the user to perform the following tasks: " + '\n'
                      + "Create a new appointment book, by creating a new appoinntment" + '\n'
                      + "when there is no appointment book, creating a new appointment," + '\n'
                      + "viewing all appointments, and searching for appointments of a" + '\n'
                      + "specific owner and in a specific time range." + '\n'
                      + "input for text boxes: " + '\n'
                      + "Owner name  - the name of the owner of the appointment book." + '\n'
                      + "Description - the description of the appointment." + '\n'
                      + "Begin Time  - the beginning time of the appointment," + '\n'
                      + "must be in the format of M(M)/d(d)/yyyy h(h):mm am|pm" + '\n'
                      + "End Time  - the ending time of the appointment," + '\n'
                      + "must be in the format of M(M)/d(d)/yyyy h(h):mm am|pm";

        alerter.alert(readme);
    }

    /**
     * Pretty prints an appointment book, showing the name
     * of the owner and the description, duration in minutes,
     * begin time, and end time of each appointment.
     * @param apptBook - The appointment book that will be pretty
     *                 printed.
     */
    private void prettyPrintApptBook(AppointmentBook apptBook) {

        long msDuration;
        float minsDuration;
        StringBuilder sb = new StringBuilder();
        Collection<Appointment> appointments = apptBook.getAppointments();

        // If there are no appointments, announcme that fact.
        if(apptBook.getAppointments().size() == 0) {
            sb.append("No appointments found for " + apptBook.getOwnerName());
            resultHTML.setHTML(sb.toString());
            return;
        }

        sb.append("Appointments found for " + apptBook.getOwnerName() + "<BR><BR>");

        // print each appointment.
        for(Appointment appt: appointments) {

            msDuration = appt.getEndTime().getTime() - appt.getBeginTime().getTime();
            minsDuration = msDuration / 60000;

            sb.append("Description: " + appt.getDescription() + "<BR>");
            sb.append("Duration: " + minsDuration + " minutes.<BR>");
            sb.append("Begin Time: " + appt.getBeginTimeString() + "<BR>");
            sb.append("End Time: " + appt.getEndTimeString() + "<BR><BR>");
        }

        resultHTML.setHTML(sb.toString());
    }

    /**
     * Sets up the UI on the initial loading of the
     * web page.
     */
    @Override
    public void onModuleLoad() {
        RootPanel rootPanel = RootPanel.get();

        // Build a menu bar
        MenuBar menuBar = new MenuBar();
        menuBar.setAutoOpen(true);
        menuBar.setAnimationEnabled(true);

        // Create help menu
        MenuBar helpMenu = new MenuBar(true);
        helpMenu.setAnimationEnabled(true);

        helpMenu.addItem("README", new Command() {
            @Override
            public void execute() {
              showREADME();
          }
        });

        menuBar.addItem(new MenuItem("Help", helpMenu));

        TabPanel tabPanel = new TabPanel();
        HTML headerSeperatorHTML = new HTML("<BR>");
        HTML resultHeaderHTML = new HTML("<BR><h3>Latest Result<h3>");
        resultHTML = new HTML("n/a");

        String createApptTabTitle = "Create Appointment";
        String viewAllApptTabTitle = "View All Appointments";
        String searchAllAppoTabTitle = "Search Appointments";

        // create tabs
        tabPanel.add(createAppointmentWidget(), createApptTabTitle);
        tabPanel.add(searchAllAppointmentsWidget(), searchAllAppoTabTitle);
        tabPanel.add(viewAllAppointmentsWidget(), viewAllApptTabTitle);

        // select first tab on load.
        tabPanel.selectTab(0);

        // Add all UI elements to the root panel.
        rootPanel.add(menuBar);
        rootPanel.add(headerSeperatorHTML);
        rootPanel.add(tabPanel);
        rootPanel.add(resultHeaderHTML);
        rootPanel.add(resultHTML);
  }

  interface Alerter {
    void alert(String message);
  }

}
