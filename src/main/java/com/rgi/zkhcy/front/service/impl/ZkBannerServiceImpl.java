package com.rgi.zkhcy.front.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rgi.zkhcy.front.common.bean.dataBean.ZkZhBannerData;
import com.rgi.zkhcy.front.common.util.CommonMethod;
import com.rgi.zkhcy.front.module.dao.ZkEnBannerDao;
import com.rgi.zkhcy.front.module.dao.ZkZhBannerDao;
import com.rgi.zkhcy.front.service.common.BaseService;
import com.rgi.zkhcy.front.service.service.ZkBannerService;

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
public class ZkBannerServiceImpl extends BaseService implements ZkBannerService {
	
	@Autowired
	private ZkZhBannerDao zkBannerDao;
	
	@Autowired
	private ZkEnBannerDao zkEnBannerDao;

	@Override
	public List<ZkZhBannerData> selectZkBnanerList(String lang) {
		if(CommonMethod.isNotNUll(lang) && "en".equalsIgnoreCase(lang)){
			return zkEnBannerDao.queryAllList();
		}else{
			return zkBannerDao.queryAllList();
		}
	}
	
}
