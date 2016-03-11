package com.rgi.zkhcy.front.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rgi.zkhcy.front.common.bean.dataBean.ZkZhProserviceData;
import com.rgi.zkhcy.front.common.util.CommonMethod;
import com.rgi.zkhcy.front.module.dao.ZkEnProserviceDao;
import com.rgi.zkhcy.front.module.dao.ZkZhProserviceDao;
import com.rgi.zkhcy.front.service.common.BaseService;
import com.rgi.zkhcy.front.service.service.ZkProserviceService;

/** 
 * 类 名: ZkBannerServiceImpl <br/>
 * 描 述: 描述类完成的主要功能 <br/>
 * 作 者: 周志华 <br/>
 * 创 建： 2016年1月28日 <br/>
 *
 * 历 史: (版本)作者 时间 <br/>
 */
@Service
@Transactional(readOnly = true)
public class ZkProserviceServiceImpl extends BaseService implements ZkProserviceService {
	
	@Autowired
	private ZkZhProserviceDao zkZhProserviceDao;
	
	@Autowired
	private ZkEnProserviceDao zkEnProserviceDao;

	@Override
	public List<ZkZhProserviceData> selectZkProserviceList(String lang) {
		if(CommonMethod.isNotNUll(lang) && "en".equalsIgnoreCase(lang)){
			return zkEnProserviceDao.queryAllList();
		}else{
			return zkZhProserviceDao.queryAllList();
		}
	}
	
}
