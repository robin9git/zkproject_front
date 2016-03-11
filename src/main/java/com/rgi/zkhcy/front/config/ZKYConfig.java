package com.rgi.zkhcy.front.config;

import org.apache.commons.configuration.Configuration;
import org.apache.commons.configuration.ConfigurationException;
import org.apache.commons.configuration.PropertiesConfiguration;


public class ZKYConfig {
    private static Configuration config = null;

    private static Configuration getConfig() {
        try {
            if (config == null){
                config = new PropertiesConfiguration("zkhcy.properties");
            }
        } catch (ConfigurationException e) {
            e.printStackTrace();
        }

        return config;
    }


}
