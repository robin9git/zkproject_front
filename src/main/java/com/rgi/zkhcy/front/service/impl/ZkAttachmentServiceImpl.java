package com.rgi.zkhcy.front.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rgi.zkhcy.front.common.bean.ZkAttachment;
import com.rgi.zkhcy.front.common.bean.dataBean.ZkAttachmentData;
import com.rgi.zkhcy.front.common.util.ZkAttachmentUtil;
import com.rgi.zkhcy.front.module.dao.ZkAttachmentDao;
import com.rgi.zkhcy.front.service.common.BaseService;
import com.rgi.zkhcy.front.service.service.ZkAttachmentSerivce;

/**
 * 
 * @ClassName ZkAttachmentServiceImpl
 * @describe 文件service实现类 
 * @author JQchen
 * @version 2015-11-27 下午3:40:24
 */
@Service
@Transactional(readOnly=true)
public class ZkAttachmentServiceImpl extends BaseService implements ZkAttachmentSerivce{
	@Autowired
	private ZkAttachmentDao zkAttachmentDao;
	/**
	 * 
	 * @author JQchen
	 * @describe 获取首页视频列表 
	 * @version 2015-11-27 下午4:28:17 
	 * @return
	 */
	@Override
	public List<ZkAttachmentData> getIndexVideoList() {
		log.info("文件模块---获取首页视频列表---接收请求对象");
		ZkAttachment zkAttachment=new ZkAttachment();
		zkAttachment.setMenu(ZkAttachmentUtil.MENU_4);
		return zkAttachmentDao.queryListByObject(zkAttachment);
	}

	/**
	 * 
	 * @author JQchen
	 * @describe 获取合成油报列表 
	 * @version 2015-11-27 下午4:28:17 
	 * @return
	 */
	@Override
	public List<ZkAttachmentData> getIndexMenu1List(String year) {
		log.info("文件模块---获取合成油报列表 ---接收请求对象");
		ZkAttachment zkAttachment=new ZkAttachment();
		zkAttachment.setMenu(ZkAttachmentUtil.MENU_1);
		zkAttachment.setYear(year);
		return zkAttachmentDao.queryListByObject(zkAttachment);
	}

	/**
	 * 
	 * @author JQchen
	 * @describe 获取合成油世界列表 
	 * @version 2015-11-27 下午4:28:17 
	 * @return
	 */
	@Override
	public List<ZkAttachmentData> getIndexMenu2List() {
		log.info("文件模块---获取合成油世界列表 ---接收请求对象");
		ZkAttachment zkAttachment=new ZkAttachment();
		zkAttachment.setMenu(ZkAttachmentUtil.MENU_2);
		return zkAttachmentDao.queryListByObject(zkAttachment);
	}

	/**
	 * 
	 * @author JQchen
	 * @describe 获取文章及出版物列表 
	 * @version 2015-11-27 下午4:28:17 
	 * @return
	 */
	@Override
	public List<ZkAttachmentData> getIndexMenu3List() {
		log.info("文件模块--- 获取文章及出版物列表 ---接收请求对象");
		ZkAttachment zkAttachment=new ZkAttachment();
		zkAttachment.setMenu(ZkAttachmentUtil.MENU_3);
		return zkAttachmentDao.queryListByObject(zkAttachment);
	}

	/**
	 * 
	 * @author JQchen
	 * @describe 获取煤海油金列表 
	 * @version 2015-11-27 下午4:28:17 
	 * @return
	 */
	@Override
	public List<ZkAttachmentData> getIndexMenu5List() {
		log.info("文件模块---获取煤海油金列表 ---接收请求对象");
		ZkAttachment zkAttachment=new ZkAttachment();
		zkAttachment.setMenu(ZkAttachmentUtil.MENU_5);
		return zkAttachmentDao.queryListByObject(zkAttachment);
	}
	
	
	/**
	 * 查询合成邮报时间
	 * @return
	 */
	public List<ZkAttachmentData> queryByMenu(){
		return zkAttachmentDao.queryByMenu();
	}
}
