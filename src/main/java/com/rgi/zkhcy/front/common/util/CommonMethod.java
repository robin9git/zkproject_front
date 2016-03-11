package com.rgi.zkhcy.front.common.util;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

public class CommonMethod {

	/**
	 * 判断对象不为空方法
	 * 不为空返回true
	 * 空则返回false
	 * */
	public static boolean isNotNUll(Object obj){
		if(obj!=null && !"".equals(obj)){
			return true;
		}else{
			return false;
		}
		
	}
	
	public static void main(String[] args) {
		
		System.out.println("aSd".equalsIgnoreCase("asd"));
		
	}
	
	/**
	 * Gson 转化数据 并抛给页面
	 * 
	 * */
	public static void gson2Jsp(HttpServletResponse response,Object obj) {
		
		//转换数据类型
        GsonBuilder gbuilder = new GsonBuilder();
        // 去除对html格式的转化
     	Gson gson = gbuilder.disableHtmlEscaping().create();
		String jsonStr = gson.toJson(obj); 
		//处理乱码问题
		response.setContentType("application/json; charset=utf-8");
		try {
			response.getWriter().write(jsonStr);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
		
	}
	
}
