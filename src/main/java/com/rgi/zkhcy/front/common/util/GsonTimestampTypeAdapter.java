package com.rgi.zkhcy.front.common.util;

import com.google.gson.*;

import java.lang.reflect.Type;
import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Project: qyxy_scrapy
 * Created by yonghui.feng on 14-6-6.
 */
public class GsonTimestampTypeAdapter
        implements JsonSerializer<Timestamp>, JsonDeserializer<Timestamp>
{
    private final DateFormat format;

    public GsonTimestampTypeAdapter()
    {
        this.format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); }

    public JsonElement serialize(Timestamp src, Type arg1, JsonSerializationContext arg2) {
        String dateFormatAsString = this.format.format(new Date(src.getTime()));
        return new JsonPrimitive(dateFormatAsString);
    }

    public Timestamp deserialize(JsonElement json, Type typeOfT, JsonDeserializationContext context) throws JsonParseException {
        if (!(json instanceof JsonPrimitive))
            throw new JsonParseException("The date should be a string value");
        try
        {
            Date date = this.format.parse(json.getAsString());
            return new Timestamp(date.getTime());
        } catch (ParseException e) {
            throw new JsonParseException(e);
        }
    }
}
