package com.rgi.zkhcy.front.service.service;

import java.util.List;

import com.rgi.zkhcy.front.common.bean.ZkAttachment;
import com.rgi.zkhcy.front.common.bean.dataBean.ZkAttachmentData;

/**
 * 
 * @ClassName ZkAttachmentSerivce
 * @describe  文件Service
 * @author JQchen
 * @version 2015-11-27 下午3:39:28
 */
public interface ZkAttachmentSerivce {

	/**
	 * 
	 * @author JQchen
	 * @describe 获取首页视频列表 
	 * @version 2015-11-27 下午4:28:17 
	 * @return
	 */
	public List<ZkAttachmentData> getIndexVideoList();
	
	/**
	 * 
	 * @author JQchen
	 * @describe 获取合成油报列表 
	 * @version 2015-11-27 下午4:28:17 
	 * @return
	 */
	public List<ZkAttachmentData> getIndexMenu1List(String year);
	/**
	 * 
	 * @author JQchen
	 * @describe 获取合成油世界列表 
	 * @version 2015-11-27 下午4:28:17 
	 * @return
	 */
	public List<ZkAttachmentData> getIndexMenu2List();
	/**
	 * 
	 * @author JQchen
	 * @describe 获取文章及出版物列表 
	 * @version 2015-11-27 下午4:28:17 
	 * @return
	 */
	public List<ZkAttachmentData> getIndexMenu3List();
	/**
	 * 
	 * @author JQchen
	 * @describe 获取煤海油金列表 
	 * @version 2015-11-27 下午4:28:17 
	 * @return
	 */
	public List<ZkAttachmentData> getIndexMenu5List();
	
	

	/**
	 * 查询合成邮报时间
	 * @return
	 */
	public List<ZkAttachmentData> queryByMenu();
	
	
}
