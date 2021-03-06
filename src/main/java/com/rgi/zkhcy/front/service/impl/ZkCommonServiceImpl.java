package com.rgi.zkhcy.front.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rgi.zkhcy.front.common.bean.ZkAttachment;
import com.rgi.zkhcy.front.common.bean.dataBean.ZkAttachmentData;
import com.rgi.zkhcy.front.module.dao.ZkAttachmentDao;
import com.rgi.zkhcy.front.service.common.BaseService;
import com.rgi.zkhcy.front.service.service.ZkCommonSerivce;

/** 
 * 类 名: ZkCommonServiceImpl <br/>
 * 描 述: 根据不同参数获取不同类型的PDF <br/>
 * 作 者: 周志华 <br/>
 * 创 建： 2015年12月23日 <br/>
 *
 * 历 史: (版本)作者 时间 <br/>
 */
@Service
@Transactional(readOnly=true)
public class ZkCommonServiceImpl extends BaseService implements ZkCommonSerivce{
	
	@Autowired
	private ZkAttachmentDao zkAttachmentDao;

	public List<ZkAttachmentData> getPDF(ZkAttachment entity) {
		log.info("ZkCommonServiceImpl...");
		return zkAttachmentDao.queryListByObject(entity);
	}
	
	/**
	 * 查询附件时间
	 * @return
	 */
	public List<ZkAttachmentData> queryDateByMenu(ZkAttachment entity){
		return zkAttachmentDao.queryDateByMenu(entity);
	}
	
}
