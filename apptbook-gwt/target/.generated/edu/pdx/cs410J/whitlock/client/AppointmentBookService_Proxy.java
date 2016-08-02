package edu.pdx.cs410J.whitlock.client;

import com.google.gwt.user.client.rpc.impl.RemoteServiceProxy;
import com.google.gwt.user.client.rpc.impl.ClientSerializationStreamWriter;
import com.google.gwt.user.client.rpc.SerializationStreamWriter;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.rpc.impl.RequestCallbackAdapter.ResponseReader;
import com.google.gwt.user.client.rpc.SerializationException;
import com.google.gwt.user.client.rpc.RpcToken;
import com.google.gwt.user.client.rpc.RpcTokenException;
import com.google.gwt.core.client.impl.Impl;
import com.google.gwt.user.client.rpc.impl.RpcStatsContext;

public class AppointmentBookService_Proxy extends RemoteServiceProxy implements edu.pdx.cs410J.whitlock.client.AppointmentBookServiceAsync {
  private static final String REMOTE_SERVICE_INTERFACE_NAME = "edu.pdx.cs410J.whitlock.client.AppointmentBookService";
  private static final String SERIALIZATION_POLICY ="DFE0A0F10A6324A71B9277FC1CB40A7C";
  private static final edu.pdx.cs410J.whitlock.client.AppointmentBookService_TypeSerializer SERIALIZER = new edu.pdx.cs410J.whitlock.client.AppointmentBookService_TypeSerializer();
  
  public AppointmentBookService_Proxy() {
    super(GWT.getModuleBaseURL(),
      "appointments", 
      SERIALIZATION_POLICY, 
      SERIALIZER);
  }
  
  public void createAppointmentBook(int numberOfAppointments, com.google.gwt.user.client.rpc.AsyncCallback async) {
    com.google.gwt.user.client.rpc.impl.RemoteServiceProxy.ServiceHelper helper = new com.google.gwt.user.client.rpc.impl.RemoteServiceProxy.ServiceHelper("AppointmentBookService_Proxy", "createAppointmentBook");
    try {
      SerializationStreamWriter streamWriter = helper.start(REMOTE_SERVICE_INTERFACE_NAME, 1);
      streamWriter.writeString("I");
      streamWriter.writeInt(numberOfAppointments);
      helper.finish(async, ResponseReader.OBJECT);
    } catch (SerializationException ex) {
      async.onFailure(ex);
    }
  }
  @Override
  public SerializationStreamWriter createStreamWriter() {
    ClientSerializationStreamWriter toReturn =
      (ClientSerializationStreamWriter) super.createStreamWriter();
    if (getRpcToken() != null) {
      toReturn.addFlags(ClientSerializationStreamWriter.FLAG_RPC_TOKEN_INCLUDED);
    }
    return toReturn;
  }
  @Override
  protected void checkRpcTokenType(RpcToken token) {
    if (!(token instanceof com.google.gwt.user.client.rpc.XsrfToken)) {
      throw new RpcTokenException("Invalid RpcToken type: expected 'com.google.gwt.user.client.rpc.XsrfToken' but got '" + token.getClass() + "'");
    }
  }
}
