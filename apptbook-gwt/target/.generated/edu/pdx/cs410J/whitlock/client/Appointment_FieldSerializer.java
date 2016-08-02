package edu.pdx.cs410J.whitlock.client;

import com.google.gwt.user.client.rpc.SerializationException;
import com.google.gwt.user.client.rpc.SerializationStreamReader;
import com.google.gwt.user.client.rpc.SerializationStreamWriter;
import com.google.gwt.user.client.rpc.impl.ReflectionHelper;

@SuppressWarnings("deprecation")
public class Appointment_FieldSerializer implements com.google.gwt.user.client.rpc.impl.TypeHandler {
  public static void deserialize(SerializationStreamReader streamReader, edu.pdx.cs410J.whitlock.client.Appointment instance) throws SerializationException {
    
    edu.pdx.cs410J.AbstractAppointment_FieldSerializer.deserialize(streamReader, instance);
  }
  
  public static edu.pdx.cs410J.whitlock.client.Appointment instantiate(SerializationStreamReader streamReader) throws SerializationException {
    return new edu.pdx.cs410J.whitlock.client.Appointment();
  }
  
  public static void serialize(SerializationStreamWriter streamWriter, edu.pdx.cs410J.whitlock.client.Appointment instance) throws SerializationException {
    
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
