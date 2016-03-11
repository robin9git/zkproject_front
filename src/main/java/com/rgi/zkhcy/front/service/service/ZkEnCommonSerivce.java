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
public interface ZkEnCommonSerivce {
	
	/**
	 * 描 述： <br/>
	 * 作 者：周志华<br/>
	 * 历 史: (版本)作者 时间 注释 <br/>
	 * @param entity
	 * @return
	 */
	public List<ZkAttachmentData> getPDF(ZkAttachment entity);
	
	/**
	 * 查询附件时间
	 * @return
	 */
	public List<ZkAttachmentData> queryDateByMenu(ZkAttachment entity);
	
}
