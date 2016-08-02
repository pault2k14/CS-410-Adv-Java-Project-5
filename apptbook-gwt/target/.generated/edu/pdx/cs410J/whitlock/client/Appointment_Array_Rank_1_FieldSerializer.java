package edu.pdx.cs410J.whitlock.client;

import com.google.gwt.user.client.rpc.SerializationException;
import com.google.gwt.user.client.rpc.SerializationStreamReader;
import com.google.gwt.user.client.rpc.SerializationStreamWriter;
import com.google.gwt.user.client.rpc.impl.ReflectionHelper;

@SuppressWarnings("deprecation")
public class Appointment_Array_Rank_1_FieldSerializer implements com.google.gwt.user.client.rpc.impl.TypeHandler {
  public static void deserialize(SerializationStreamReader streamReader, edu.pdx.cs410J.whitlock.client.Appointment[] instance) throws SerializationException {
    com.google.gwt.user.client.rpc.core.java.lang.Object_Array_CustomFieldSerializer.deserialize(streamReader, instance);
  }
  
  public static edu.pdx.cs410J.whitlock.client.Appointment[] instantiate(SerializationStreamReader streamReader) throws SerializationException {
    int size = streamReader.readInt();
    return new edu.pdx.cs410J.whitlock.client.Appointment[size];
  }
  
  public static void serialize(SerializationStreamWriter streamWriter, edu.pdx.cs410J.whitlock.client.Appointment[] instance) throws SerializationException {
    com.google.gwt.user.client.rpc.core.java.lang.Object_Array_CustomFieldSerializer.serialize(streamWriter, instance);
  }
  
  public Object create(SerializationStreamReader reader) throws SerializationException {
    return edu.pdx.cs410J.whitlock.client.Appointment_Array_Rank_1_FieldSerializer.instantiate(reader);
  }
  
  public void deserial(SerializationStreamReader reader, Object object) throws SerializationException {
    edu.pdx.cs410J.whitlock.client.Appointment_Array_Rank_1_FieldSerializer.deserialize(reader, (edu.pdx.cs410J.whitlock.client.Appointment[])object);
  }
  
  public void serial(SerializationStreamWriter writer, Object object) throws SerializationException {
    edu.pdx.cs410J.whitlock.client.Appointment_Array_Rank_1_FieldSerializer.serialize(writer, (edu.pdx.cs410J.whitlock.client.Appointment[])object);
  }
  
}
