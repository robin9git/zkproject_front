package com.rgi.zkhcy.front.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rgi.zkhcy.front.common.bean.dataBean.ZkLogoData;
import com.rgi.zkhcy.front.module.dao.ZkEnLogoDao;
import com.rgi.zkhcy.front.service.common.BaseService;
import com.rgi.zkhcy.front.service.service.ZkEnLogoService;

/**
 * 
 * @ClassName ZkLogoServiceImpl
 * @describe logo实现类
 * @author JQchen
 * @version 2015-11-28 下午3:35:04
 */
@Service
@Transactional(readOnly=true)
public class ZkEnLogoServiceImpl extends BaseService implements ZkEnLogoService {
	@Autowired
	private ZkEnLogoDao zkEnLogoDao;
	
	/**
	 * 查询logo列表
	 */
	@Override
	public List<ZkLogoData> getLogoList() {
		log.info("logo模块----查询logo列表---接受请求对象");
		List<ZkLogoData> list=zkEnLogoDao.queryAllList();
		return list;
	}

}
