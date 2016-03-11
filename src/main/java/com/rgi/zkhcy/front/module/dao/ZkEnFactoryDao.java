package com.rgi.zkhcy.front.module.dao;

import java.util.List;

import com.rgi.zkhcy.front.common.bean.ZkZhFactory;
import com.rgi.zkhcy.front.common.bean.dataBean.ZkZhFactoryData;
import com.rgi.zkhcy.front.module.common.BaseDao;
import com.rgi.zkhcy.front.module.common.MyBatisDao;

/**
 * 
 * @ClassName ZkMenuDao
 * @describe 中科菜单
 * @author JQchen
 * @version 2015-11-24 下午5:00:28
 */
@MyBatisDao
public interface ZkEnFactoryDao extends BaseDao<ZkZhFactory,ZkZhFactoryData> {

	public List<ZkZhFactoryData> getProDebreifing();
	
}
