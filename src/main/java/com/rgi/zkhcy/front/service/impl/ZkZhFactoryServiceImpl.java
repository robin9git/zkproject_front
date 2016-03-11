package com.rgi.zkhcy.front.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rgi.zkhcy.front.common.bean.ZkZhFactory;
import com.rgi.zkhcy.front.common.bean.dataBean.ZkZhFactoryData;
import com.rgi.zkhcy.front.common.util.CommonMethod;
import com.rgi.zkhcy.front.module.dao.ZkEnFactoryDao;
import com.rgi.zkhcy.front.module.dao.ZkZhFactoryDao;
import com.rgi.zkhcy.front.service.common.BaseService;
import com.rgi.zkhcy.front.service.service.ZkZhFactoryService;

/** 
 * 类 名: ZkZhFactoryServiceImpl <br/>
 * 描 述: 工厂service实现类 <br/>
 * 作 者: 周志华 <br/>
 * 创 建： 2016年1月27日 <br/>
 *
 * 历 史: (版本)作者 时间 <br/>
 */
@Service
@Transactional(readOnly=true)
public class ZkZhFactoryServiceImpl extends BaseService implements ZkZhFactoryService {

	@Autowired
	private ZkZhFactoryDao zkZhFactoryDao;
	
	@Autowired
	private ZkEnFactoryDao zkEnFactoryDao;

	@Override
	public List<ZkZhFactoryData> getFactoryList(String lang) {
		if(CommonMethod.isNotNUll(lang) && "en".equalsIgnoreCase(lang)){
			return zkEnFactoryDao.queryAllList();
		}else{
			return zkZhFactoryDao.queryAllList();
		}
	}

	@Override
	public List<ZkZhFactoryData> getFactoryByMenuId(String menuId, String lang) {
		ZkZhFactory entity = new ZkZhFactory();
		entity.setMenu_id(menuId);
		if(CommonMethod.isNotNUll(lang) && "en".equalsIgnoreCase(lang)){
			return zkEnFactoryDao.queryListByObject(entity);
		}else{
			return zkZhFactoryDao.queryListByObject(entity);
		}
	}
	
	@Override
	public List<ZkZhFactoryData> getProDebreifing(String lang) {
		if(CommonMethod.isNotNUll(lang) && "en".equalsIgnoreCase(lang)){
			return zkEnFactoryDao.getProDebreifing();
		}else{
			return zkZhFactoryDao.getProDebreifing();
		}
	}
	
}
