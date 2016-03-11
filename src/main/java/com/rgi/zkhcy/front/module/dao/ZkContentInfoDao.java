package com.rgi.zkhcy.front.module.dao;

import java.util.List;
import java.util.Map;

import com.rgi.zkhcy.front.common.bean.ZkContentInfo;
import com.rgi.zkhcy.front.common.bean.dataBean.ZkContentInfoData;
import com.rgi.zkhcy.front.module.common.BaseDao;
import com.rgi.zkhcy.front.module.common.MyBatisDao;

/**
 * 
 * @ClassName ZkContentInfoDao
 * @describe 鍐呭淇℃伅
 * @author JQchen
 * @version 2015-11-24 涓嬪崍4:54:39
 */
@MyBatisDao
public interface ZkContentInfoDao extends BaseDao<ZkContentInfo,ZkContentInfoData> {

	
	/**
	 * 鏌ヨ鏂伴椈鍔ㄦ�淇℃伅鐩稿叧
	 * @param model
	 * @return
	 */
	List<ZkContentInfoData>  queryContentNewsInfo(ZkContentInfo model);
	
	public List<ZkContentInfoData> queryLucene(Map<String, Object> queryMap);
	
	public long queryLuceneAmount(Map<String, Object> queryMap);
	
	public List<ZkContentInfoData> getZkContentInfoList3ById(ZkContentInfo model);
	
}
