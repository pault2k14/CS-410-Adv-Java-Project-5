package edu.pdx.cs410J.pbt.client;

import com.google.gwt.user.client.rpc.SerializationException;
import com.google.gwt.user.client.rpc.SerializationStreamReader;
import com.google.gwt.user.client.rpc.SerializationStreamWriter;
import com.google.gwt.user.client.rpc.impl.ReflectionHelper;

@SuppressWarnings("deprecation")
public class AppointmentBook_FieldSerializer implements com.google.gwt.user.client.rpc.impl.TypeHandler {
  private static native java.util.ArrayList getAppointments(edu.pdx.cs410J.pbt.client.AppointmentBook instance) /*-{
    return instance.@edu.pdx.cs410J.pbt.client.AppointmentBook::appointments;
  }-*/;
  
  private static native void setAppointments(edu.pdx.cs410J.pbt.client.AppointmentBook instance, java.util.ArrayList value) 
  /*-{
    instance.@edu.pdx.cs410J.pbt.client.AppointmentBook::appointments = value;
  }-*/;
  
  private static native java.lang.String getOwner(edu.pdx.cs410J.pbt.client.AppointmentBook instance) /*-{
    return instance.@edu.pdx.cs410J.pbt.client.AppointmentBook::owner;
  }-*/;
  
  private static native void setOwner(edu.pdx.cs410J.pbt.client.AppointmentBook instance, java.lang.String value) 
  /*-{
    instance.@edu.pdx.cs410J.pbt.client.AppointmentBook::owner = value;
  }-*/;
  
  public static void deserialize(SerializationStreamReader streamReader, edu.pdx.cs410J.pbt.client.AppointmentBook instance) throws SerializationException {
    setAppointments(instance, (java.util.ArrayList) streamReader.readObject());
    setOwner(instance, streamReader.readString());
    
    edu.pdx.cs410J.AbstractAppointmentBook_FieldSerializer.deserialize(streamReader, instance);
  }
  
  public static edu.pdx.cs410J.pbt.client.AppointmentBook instantiate(SerializationStreamReader streamReader) throws SerializationException {
    return new edu.pdx.cs410J.pbt.client.AppointmentBook();
  }
  
  public static void serialize(SerializationStreamWriter streamWriter, edu.pdx.cs410J.pbt.client.AppointmentBook instance) throws SerializationException {
    streamWriter.writeObject(getAppointments(instance));
    streamWriter.writeString(getOwner(instance));
    
    edu.pdx.cs410J.AbstractAppointmentBook_FieldSerializer.serialize(streamWriter, instance);
  }
  
  public Object create(SerializationStreamReader reader) throws SerializationException {
    return edu.pdx.cs410J.pbt.client.AppointmentBook_FieldSerializer.instantiate(reader);
  }
  
  public void deserial(SerializationStreamReader reader, Object object) throws SerializationException {
    edu.pdx.cs410J.pbt.client.AppointmentBook_FieldSerializer.deserialize(reader, (edu.pdx.cs410J.pbt.client.AppointmentBook)object);
  }
  
  public void serial(SerializationStreamWriter writer, Object object) throws SerializationException {
    edu.pdx.cs410J.pbt.client.AppointmentBook_FieldSerializer.serialize(writer, (edu.pdx.cs410J.pbt.client.AppointmentBook)object);
  }
  
}
