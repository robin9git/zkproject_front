package com.rgi.zkhcy.front.module.dao;

import java.util.List;

import com.rgi.zkhcy.front.common.bean.ZkZhFactory;
import com.rgi.zkhcy.front.common.bean.dataBean.ZkZhFactoryData;
import com.rgi.zkhcy.front.module.common.BaseDao;
import com.rgi.zkhcy.front.module.common.MyBatisDao;

/** 
 * 类 名: ZkZhFactoryDao <br/>
 * 描 述: 中文版首页factory <br/>
 * 作 者: 周志华 <br/>
 * 创 建： 2016年2月3日 <br/>
 *
 * 历 史: (版本)作者 时间 <br/>
 */
@MyBatisDao
public interface ZkZhFactoryDao extends BaseDao<ZkZhFactory,ZkZhFactoryData> {

	public List<ZkZhFactoryData> getProDebreifing();
	
}
