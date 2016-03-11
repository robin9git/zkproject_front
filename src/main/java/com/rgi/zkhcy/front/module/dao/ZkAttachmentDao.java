package com.rgi.zkhcy.front.module.dao;

import java.util.List;

import com.rgi.zkhcy.front.common.bean.ZkAttachment;
import com.rgi.zkhcy.front.common.bean.dataBean.ZkAttachmentData;
import com.rgi.zkhcy.front.module.common.BaseDao;
import com.rgi.zkhcy.front.module.common.MyBatisDao;

/**
 * 
 * @ClassName ZkAttachmentDao
 * @describe 文件DAO 
 * @author JQchen
 * @version 2015-11-27 下午3:39:00
 */
@MyBatisDao
public interface ZkAttachmentDao extends BaseDao<ZkAttachment, ZkAttachmentData> {

	
	
	/**
	 * 查询合成邮报时间
	 * @return
	 */
	List<ZkAttachmentData> queryByMenu();
	
	/**
	 * 查询附件时间
	 * @return
	 */
	List<ZkAttachmentData> queryDateByMenu(ZkAttachment entity);
	
}
