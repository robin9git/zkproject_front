package com.rgi.zkhcy.front.common.util;

import com.google.gson.JsonElement;
import com.google.gson.JsonPrimitive;
import com.google.gson.JsonSerializationContext;
import com.google.gson.JsonSerializer;

import java.lang.reflect.Type;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Project: qyxy_scrapy
 * Created by yonghui.feng on 14-6-6.
 */
public class GsonSqlDateTypeAdapter
        implements JsonSerializer<Date>
{
    private final DateFormat format;

    public GsonSqlDateTypeAdapter()
    {
        this.format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    }

    public JsonElement serialize(Date src, Type arg1, JsonSerializationContext arg2) {
        String dateFormatAsString = this.format.format(new Date(src.getTime()));
        return new JsonPrimitive(dateFormatAsString);
    }
}
