package com.rgi.zkhcy.front.common.util;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.lang.reflect.Type;
import java.sql.Timestamp;
import java.util.Date;

/**
 * Project: qyxy_scrapy
 * Created by yonghui.feng on 14-6-6.
 */
public class JsonUtil
{
    private static Gson gson;

    private static Gson _getGson()
    {
        if (gson == null) {
            gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm:ss").registerTypeAdapter(Timestamp.class, new GsonTimestampTypeAdapter()).registerTypeAdapter(Date.class, new GsonSqlDateTypeAdapter()).create();
        }
        return gson;
    }

    public static <T> T fromJson(String json, Class<T> tClass) {
        return _getGson().fromJson(json, tClass);
    }

    public static String toJson(Object o, Type type) {
        return _getGson().toJson(o, type);
    }

    public static String toJson(Object o) {
        return _getGson().toJson(o);
    }
}
