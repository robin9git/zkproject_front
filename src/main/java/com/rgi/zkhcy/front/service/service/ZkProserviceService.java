package com.rgi.zkhcy.front.service.service;

import java.util.List;

import com.rgi.zkhcy.front.common.bean.dataBean.ZkZhProserviceData;

/** 
 * 类 名: ZkBannerService <br/>
 * 描 述: 描述类完成的主要功能 <br/>
 * 作 者: 周志华 <br/>
 * 创 建： 2016年1月28日 <br/>
 *
 * 历 史: (版本)作者 时间 <br/>
 */
public interface ZkProserviceService{
	
	public List<ZkZhProserviceData> selectZkProserviceList(String lang);
	
}
