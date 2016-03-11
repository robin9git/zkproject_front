package com.rgi.zkhcy.front.service.service;

import java.util.List;
import java.util.Map;

import com.rgi.zkhcy.front.common.bean.ZkContentInfo;
import com.rgi.zkhcy.front.common.bean.dataBean.ZkContentInfoData;

/**
 * 
 * @ClassName ZkContentInfoService
 * @describe 鍐呭淇℃伅
 * @author JQchen
 * @version 2015-11-24 涓嬪崍4:53:47
 */
public interface ZkEnContentInfoService {
	
	/**
	 * 
	 * @author JQchen
	 * @describe 閫氳繃ID鏌ヨ瀵硅薄 
	 * @version 2015-11-24 涓嬪崍5:08:47 
	 * @param id
	 * @return
	 */
	public ZkContentInfoData selectZkContentInfoById(String id);
	
	/**
	 * 
	 * @author JQchen
	 * @describe 鏌ヨ棣栭〉鏈�柊鍔ㄦ� 
	 * @version 2015-11-28 涓嬪崍6:35:31 
	 * @return
	 */
	public List<ZkContentInfoData> selectIndexNewsContent();
	
	/**
	 * 
	 * @author JQchen
	 * @describe 鏍规嵁鑿滃崟ID鏌ヨ鍐呭鍒楄〃
	 * @version 2015-11-28 涓嬪崍12:26:18 
	 * @param menuId
	 * @return
	 */
	public List<ZkContentInfoData> selectContentByMenuId(String menuId);
	/**
	 * 
	 * @author JQchen
	 * @describe 鏍规嵁鑿滃崟ID鏌ヨ涓�骇鍐呭 
	 * @version 2015-11-28 涓嬪崍12:26:18 
	 * @param menuId
	 * @return
	 */
	public List<ZkContentInfoData> selectContentForLevel1ByMenuId(String menuId);
	/**
	 * 
	 * @author JQchen
	 * @describe 鏍规嵁鑿滃崟ID鏌ヨ浜岀骇鍐呭 
	 * @version 2015-11-28 涓嬪崍12:26:18 
	 * @param menuId
	 * @return
	 */
	public List<ZkContentInfoData> selectContentForLevel2ByMenuId(String menuId);
	/**
	 * 
	 * @author JQchen
	 * @describe 鏍规嵁鑿滃崟ID鏌ヨ涓夌骇鍐呭 
	 * @version 2015-11-28 涓嬪崍12:26:18 
	 * @param menuId
	 * @return
	 */
	public List<ZkContentInfoData> selectContentForLevel3ByMenuId(String menuId);
	
	
	
	
	/**
	 * 鏌ヨ鏂伴椈鍔ㄦ�淇℃伅鐩稿叧
	 * @author JQchen
	 * @describe 鏍规嵁鑿滃崟ID鏌ヨ涓夌骇鍐呭 
	 * @version 2015-11-28 涓嬪崍12:26:18 
	 * @param menuId
	 * @return
	 */
	public List<ZkContentInfoData> selectContentNewsInfo(String menuId);
	
	
	/**
	 * 鏍规嵁鑿滃崟ID鍜屾椂闂存煡璇㈡枃绔犲垪琛�
	 * 
	 * @param menuId
	 * @param date
	 * @return
	 */
	public List<ZkContentInfoData> selectContentByMenuIdDate(String menuId,String date);
	
	public List<ZkContentInfoData> getLuceneList(Map<String, Object> queryMap);
	
	public long queryLuceneAmount(Map<String, Object> queryMap);
	
	public List<ZkContentInfoData> getZkContentInfoList3ById(ZkContentInfo ent);
	
}
