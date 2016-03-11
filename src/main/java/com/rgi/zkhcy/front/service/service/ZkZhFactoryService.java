package com.rgi.zkhcy.front.service.service;


import java.util.List;

import com.rgi.zkhcy.front.common.bean.dataBean.ZkZhFactoryData;

/** 
 * 类 名: ZkZhFactoryService <br/>
 * 描 述: 描述类完成的主要功能 <br/>
 * 作 者: 周志华 <br/>
 * 创 建： 2016年1月27日 <br/>
 *
 * 历 史: (版本)作者 时间 <br/>
 */
public interface ZkZhFactoryService {
	
	public List<ZkZhFactoryData> getFactoryList(String lang);
	
	public List<ZkZhFactoryData> getFactoryByMenuId(String menuId,String lang);
	
	public List<ZkZhFactoryData> getProDebreifing(String lang);

}
