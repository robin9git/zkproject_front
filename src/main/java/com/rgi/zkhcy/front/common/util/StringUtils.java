package com.rgi.zkhcy.front.common.util;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

/**
 * Created with IntelliJ IDEA.
 * User: yonghui.feng
 * Date: 14-1-16
 * Time: 上午11:39
 * To change this template use File | Settings | File Templates.
 */
public class StringUtils {
    public static String convertStreamToString(InputStream is) {
        ByteArrayOutputStream oas = new ByteArrayOutputStream();
        copyStream(is, oas); 
        String t = oas.toString();
        try {
            oas.close();
            oas = null;
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return t;
    }

    private static void copyStream(InputStream is, OutputStream os) {
        final int buffer_size = 1024;
        try {
            byte[] bytes = new byte[buffer_size];
            for (; ; ) {
                int count = is.read(bytes, 0, buffer_size);
                if (count == -1)
                    break;
                os.write(bytes, 0, count);
            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }

    public static String getString(String src, int length, boolean ellipse){
        String res = src;
        if (src != null && src.length() > length){
            res = src.substring(0, length);
            if (ellipse){
                res = res + "...";
            }
        }

        return res;
    }

    public static String EncoderMD5(String inStr)
    {
        String outStr=null;
        if(inStr ==null)
        {
            outStr = null;
        }
        else if("".equals(inStr))
        {
            outStr = "";
        }
        else
        {
            try
            {
                MessageDigest md = MessageDigest.getInstance("MD5");
                md.update(inStr.getBytes());
                byte b[] = md.digest();
                StringBuffer buf = new StringBuffer();
                for(int i=1;i<b.length;i++)
                {
                    int c = b[i]>>>4 & 0xf;
                    buf.append(Integer.toHexString(c));
                    c = b[i]& 0xf;
                    buf.append(Integer.toHexString(c));
                }
                outStr = buf.toString();
            }
            catch (NoSuchAlgorithmException e)
            {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
        }
        return outStr;
    }
}
