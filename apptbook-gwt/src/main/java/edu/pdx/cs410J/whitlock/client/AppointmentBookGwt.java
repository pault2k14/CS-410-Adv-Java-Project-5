package edu.pdx.cs410J.whitlock.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.Command;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.*;

import java.util.Collection;
import java.util.Date;
import java.util.concurrent.TimeUnit;

/**
 * A basic GWT class that makes sure that we can send an appointment book back from the server
 */
public class AppointmentBookGwt implements EntryPoint {
  private final Alerter alerter;

    String timeDateFilter = "\\d\\d?/\\d\\d?/\\d\\d\\d\\d \\d\\d?:\\d\\d (am|pm)";
    HTML resultHTML = null;
    TextBox textBox = null;
    TextBox createAppointmentOwnerNameBox = null;
    TextBox createAppointmentBeginTimeBox = null;
    TextBox createAppointmentEndTimeBox = null;
    TextArea createAppointmentDescriptionArea = null;
    TextBox viewAppointmentsOwnerNameBox = null;
    TextBox searchAppointmentsOwnerNameBox = null;
    TextBox searchAppointmentsBeginTimeBox = null;
    TextBox searchAppointmentsEndTimeBox = null;


  public AppointmentBookGwt() {
    this(new Alerter() {
      @Override
      public void alert(String message) {
        Window.alert(message);
      }
    });
  }

  AppointmentBookGwt(Alerter alerter) {
    this.alerter = alerter;


  }

    private void createAppointments() {

        AppointmentBookServiceAsync async = GWT.create(AppointmentBookService.class);
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

    private void searchAllAppointments() {

        AppointmentBookServiceAsync async = GWT.create(AppointmentBookService.class);
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

    private void viewAllAppointments() {

        AppointmentBookServiceAsync async = GWT.create(AppointmentBookService.class);
        String ownerName = this.viewAppointmentsOwnerNameBox.getText();

        // Validate the fields

        if(ownerName == null || ownerName.length() < 1) {
            alerter.alert("Owner name field cannot be empty.");
            return;
        }

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

    private void displayCreatedAppointment(Appointment appointment) {

        StringBuilder sb = new StringBuilder();
        sb.append("Appointment created!" + "<BR>");
        sb.append("Owner: " + this.createAppointmentOwnerNameBox.getText() + "<BR>");
        sb.append("Description: " + appointment.getDescription() + "<BR>");
        sb.append("Begin time: " + appointment.getBeginTimeString() + "<BR>");
        sb.append("End time: " + appointment.getEndTimeString() + "<BR>");

        resultHTML.setHTML(sb.toString());
    }

  private void alert(Throwable ex) {
    alerter.alert(ex.toString());
  }

    public VerticalPanel createAppointmentWidget() {

        Button createApptSubmitButton = new Button("Submit");
        createApptSubmitButton.addClickHandler(new ClickHandler() {
            @Override
            public void onClick(ClickEvent clickEvent) {
                createAppointments();
            }
        });

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

        verticalPanel.add(horizontalPanelOwner);
        verticalPanel.add(horizontalPanelDescription);
        verticalPanel.add(horizontalPanelBeginTime);
        verticalPanel.add(horizontalPanelEndTime);
        verticalPanel.add(createApptSubmitButton);

        return verticalPanel;
    }

    public VerticalPanel searchAllAppointmentsWidget() {

        Button createApptSubmitButton = new Button("Submit");
        createApptSubmitButton.addClickHandler(new ClickHandler() {
            @Override
            public void onClick(ClickEvent clickEvent) {
                searchAllAppointments();
            }
        });

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

        verticalPanel.add(horizontalPanelOwner);
        verticalPanel.add(horizontalPanelBeginTime);
        verticalPanel.add(horizontalPanelEndTime);
        verticalPanel.add(createApptSubmitButton);

        return verticalPanel;
    }

    private VerticalPanel viewAllAppointmentsWidget() {

        Button viewApptSubmitButton = new Button("Submit");
        viewApptSubmitButton.addClickHandler(new ClickHandler() {
            @Override
            public void onClick(ClickEvent clickEvent) {
                viewAllAppointments();
            }
        });

        this.viewAppointmentsOwnerNameBox = new TextBox();
        Label ownerLabel = new Label("Owner name");
        VerticalPanel verticalPanel = new VerticalPanel();
        HorizontalPanel horizontalPanelOwner = new HorizontalPanel();
        horizontalPanelOwner.add(ownerLabel);
        horizontalPanelOwner.add(this.viewAppointmentsOwnerNameBox);


        verticalPanel.add(horizontalPanelOwner);
        verticalPanel.add(viewApptSubmitButton);

        return verticalPanel;
    }

    public void showREADME() {

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

    public void prettyPrintApptBook(AppointmentBook apptBook) {

        long msDuration;
        float minsDuration;
        StringBuilder sb = new StringBuilder();
        Collection<Appointment> appointments = apptBook.getAppointments();

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

      //create tabs
      tabPanel.add(createAppointmentWidget(), createApptTabTitle);
      tabPanel.add(searchAllAppointmentsWidget(), searchAllAppoTabTitle);
      tabPanel.add(viewAllAppointmentsWidget(), viewAllApptTabTitle);

      //select first tab on load.
      tabPanel.selectTab(0);

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
