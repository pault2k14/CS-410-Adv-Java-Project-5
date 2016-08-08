package edu.pdx.cs410J.whitlock.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.*;

import java.util.Collection;

/**
 * A basic GWT class that makes sure that we can send an appointment book back from the server
 */
public class AppointmentBookGwt implements EntryPoint {
  private final Alerter alerter;

  Button button;
  TextBox textBox;
    TextBox ownerNameBox;
    TextBox beginTimeBox;
    TextBox endTimeBox;
    TextArea descriptionBox;


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

    addWidgets();
  }

  private void addWidgets() {
    button = new Button("Ping Server");
    button.addClickHandler(new ClickHandler() {
      @Override
      public void onClick(ClickEvent clickEvent) {
        createAppointments();
      }
    });

    this.textBox = new TextBox();
      this.ownerNameBox = new TextBox();
      this.descriptionBox = new TextArea();
      this.beginTimeBox = new TextBox();
      this.endTimeBox = new TextBox();
  }

  private void createAppointments() {
    AppointmentBookServiceAsync async = GWT.create(AppointmentBookService.class);
    int numberOfAppointments = getNumberOfAppointments();
      String ownerName = this.ownerNameBox.getText();
      String description = this.descriptionBox.getText();
      String beginTime = this.beginTimeBox.getText();
      String endTime = this.endTimeBox.getText();
    async.createAppointmentBook(ownerName, description, beginTime, endTime, new AsyncCallback<AppointmentBook>() {

      @Override
      public void onSuccess(AppointmentBook airline) {
        displayInAlertDialog(airline);
      }

      @Override
      public void onFailure(Throwable ex) {
        alert(ex);
      }
    });
  }

  private int getNumberOfAppointments() {
    String number = this.textBox.getText();

    return Integer.parseInt(number);
  }


  private void displayInAlertDialog(AppointmentBook airline) {
    StringBuilder sb = new StringBuilder(airline.toString());
    sb.append("\n");

    Collection<Appointment> flights = airline.getAppointments();
    for (Appointment flight : flights) {
      sb.append(flight);
      sb.append("\n");
    }
    alerter.alert(sb.toString());
  }

  private void alert(Throwable ex) {
    alerter.alert(ex.toString());
  }

  @Override
  public void onModuleLoad() {
    RootPanel rootPanel = RootPanel.get();
    rootPanel.add(button);

    DockPanel panel = new DockPanel();
    panel.add(new Label("Number of appointments"), DockPanel.WEST);
    panel.add(textBox, DockPanel.CENTER);
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
      horizontalPanelOwner.add(this.ownerNameBox);
      horizontalPanelDescription.add(descriptionLabel);
      horizontalPanelDescription.add(this.descriptionBox);
      horizontalPanelBeginTime.add(beginTimeLabel);
      horizontalPanelBeginTime.add(this.beginTimeBox);
      horizontalPanelEndTime.add(endTimeLabel);
      horizontalPanelEndTime.add(endTimeBox);

      verticalPanel.add(horizontalPanelOwner);
      verticalPanel.add(horizontalPanelDescription);
      verticalPanel.add(horizontalPanelBeginTime);
      verticalPanel.add(horizontalPanelEndTime);

      rootPanel.add(panel);
      rootPanel.add(verticalPanel);
  }

  interface Alerter {
    void alert(String message);
  }

}
