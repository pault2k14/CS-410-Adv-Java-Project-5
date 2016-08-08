package edu.pdx.cs410J.whitlock.client;

import com.google.gwt.user.client.rpc.SerializationException;
import com.google.gwt.user.client.rpc.SerializationStreamReader;
import com.google.gwt.user.client.rpc.SerializationStreamWriter;
import com.google.gwt.user.client.rpc.impl.ReflectionHelper;

@SuppressWarnings("deprecation")
public class Appointment_FieldSerializer implements com.google.gwt.user.client.rpc.impl.TypeHandler {
  private static native java.util.Date getBeginTime(edu.pdx.cs410J.whitlock.client.Appointment instance) /*-{
    return instance.@edu.pdx.cs410J.whitlock.client.Appointment::beginTime;
  }-*/;
  
  private static native void setBeginTime(edu.pdx.cs410J.whitlock.client.Appointment instance, java.util.Date value) 
  /*-{
    instance.@edu.pdx.cs410J.whitlock.client.Appointment::beginTime = value;
  }-*/;
  
  private static native java.lang.String getDescription(edu.pdx.cs410J.whitlock.client.Appointment instance) /*-{
    return instance.@edu.pdx.cs410J.whitlock.client.Appointment::description;
  }-*/;
  
  private static native void setDescription(edu.pdx.cs410J.whitlock.client.Appointment instance, java.lang.String value) 
  /*-{
    instance.@edu.pdx.cs410J.whitlock.client.Appointment::description = value;
  }-*/;
  
  private static native java.util.Date getEndTime(edu.pdx.cs410J.whitlock.client.Appointment instance) /*-{
    return instance.@edu.pdx.cs410J.whitlock.client.Appointment::endTime;
  }-*/;
  
  private static native void setEndTime(edu.pdx.cs410J.whitlock.client.Appointment instance, java.util.Date value) 
  /*-{
    instance.@edu.pdx.cs410J.whitlock.client.Appointment::endTime = value;
  }-*/;
  
  public static void deserialize(SerializationStreamReader streamReader, edu.pdx.cs410J.whitlock.client.Appointment instance) throws SerializationException {
    setBeginTime(instance, (java.util.Date) streamReader.readObject());
    setDescription(instance, streamReader.readString());
    setEndTime(instance, (java.util.Date) streamReader.readObject());
    
    edu.pdx.cs410J.AbstractAppointment_FieldSerializer.deserialize(streamReader, instance);
  }
  
  public static edu.pdx.cs410J.whitlock.client.Appointment instantiate(SerializationStreamReader streamReader) throws SerializationException {
    return new edu.pdx.cs410J.whitlock.client.Appointment();
  }
  
  public static void serialize(SerializationStreamWriter streamWriter, edu.pdx.cs410J.whitlock.client.Appointment instance) throws SerializationException {
    streamWriter.writeObject(getBeginTime(instance));
    streamWriter.writeString(getDescription(instance));
    streamWriter.writeObject(getEndTime(instance));
    
    edu.pdx.cs410J.AbstractAppointment_FieldSerializer.serialize(streamWriter, instance);
  }
  
  public Object create(SerializationStreamReader reader) throws SerializationException {
    return edu.pdx.cs410J.whitlock.client.Appointment_FieldSerializer.instantiate(reader);
  }
  
  public void deserial(SerializationStreamReader reader, Object object) throws SerializationException {
    edu.pdx.cs410J.whitlock.client.Appointment_FieldSerializer.deserialize(reader, (edu.pdx.cs410J.whitlock.client.Appointment)object);
  }
  
  public void serial(SerializationStreamWriter writer, Object object) throws SerializationException {
    edu.pdx.cs410J.whitlock.client.Appointment_FieldSerializer.serialize(writer, (edu.pdx.cs410J.whitlock.client.Appointment)object);
  }
  
}
