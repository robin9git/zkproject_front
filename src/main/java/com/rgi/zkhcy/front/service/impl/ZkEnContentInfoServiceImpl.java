package com.rgi.zkhcy.front.service.impl;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rgi.zkhcy.front.common.bean.ZkContentInfo;
import com.rgi.zkhcy.front.common.bean.ZkMenu;
import com.rgi.zkhcy.front.common.bean.dataBean.ZkContentInfoData;
import com.rgi.zkhcy.front.common.bean.dataBean.ZkMenuData;
import com.rgi.zkhcy.front.common.util.BeanUtils;
import com.rgi.zkhcy.front.common.util.DateUtil;
import com.rgi.zkhcy.front.common.util.ZkContentInfoUtil;
import com.rgi.zkhcy.front.module.dao.ZkEnContentInfoDao;
import com.rgi.zkhcy.front.module.dao.ZkEnMenuDao;
import com.rgi.zkhcy.front.service.common.BaseService;
import com.rgi.zkhcy.front.service.service.ZkEnContentInfoService;

/**
 * 
 * @ClassName ZkContentInfoServiceImpl
 * @describe 鍐呭淇℃伅
 * @author JQchen
 * @version 2015-11-24 涓嬪崍4:54:52
 */
@Service
@Transactional(readOnly=true)
public class ZkEnContentInfoServiceImpl extends BaseService implements ZkEnContentInfoService {

	@Autowired
	private ZkEnContentInfoDao zkEnContentInfoDao;
	@Autowired
	private ZkEnMenuDao zkEnMenuDao;
	
	/**
	 * 
	 * @author JQchen
	 * @describe 閫氳繃ID鏌ヨ瀵硅薄 
	 * @version 2015-11-24 涓嬪崍5:08:47 
	 * @param id
	 * @return
	 */
	@Override
	public ZkContentInfoData selectZkContentInfoById(String id) {
		log.info("鍐呭淇℃伅妯″潡---鏍规嵁涓婚敭鏌ヨ鍐呭淇℃伅---鎺ユ敹璇锋眰瀵硅薄:id{}"+id);
		return zkEnContentInfoDao.queryById(id);
	}
	
	
	/**
	 * 
	 * @author JQchen
	 * @describe 鏌ヨ棣栭〉鏈�柊鍔ㄦ� 
	 * @version 2015-11-28 涓嬪崍6:35:31 
	 * @return
	 */
	@Override
	public List<ZkContentInfoData> selectIndexNewsContent() {
		log.info("鍐呭淇℃伅妯″潡---鏌ヨ棣栭〉鏈�柊鍔ㄦ�  ---鎺ユ敹璇锋眰瀵硅薄");
		Calendar a=Calendar.getInstance();
		String year=a.get(Calendar.YEAR)+"";
		List<ZkContentInfoData> list=new ArrayList<ZkContentInfoData>();
		ZkMenuData menuData=zkEnMenuDao.queryById("402881e851378060015137b15ab3002e");
		if(menuData!=null){
			ZkMenu zkMenu=new ZkMenu();
			zkMenu.setParentfunctionid(menuData.getId());
			List<ZkMenuData> menuList=zkEnMenuDao.queryListByObject(zkMenu);
			if(menuList!=null&&menuList.size()>0){
				for (ZkMenuData zkMenuData : menuList) {
					if(zkMenuData.getFunctionname().equals(year)){
						ZkContentInfo zkContentInfo=new ZkContentInfo();
						zkContentInfo.setStatus(BeanUtils.STATUS_1);
						zkContentInfo.setMenu_id(zkMenuData.getId());
						List<ZkContentInfoData> contentDataList=zkEnContentInfoDao.queryListByObject(zkContentInfo);
						if(contentDataList!=null&&contentDataList.size()>0){
							if(contentDataList.size()>2){
								list.addAll(contentDataList.subList(0, 3));
							}else{
								list.addAll(contentDataList);
							}
						}
					}
				}
			}
		}
		ZkMenuData menuData2=zkEnMenuDao.queryById("402881e851378060015137b181b60030");
		if(menuData2!=null){
			ZkMenu zkMenu=new ZkMenu();
			zkMenu.setParentfunctionid(menuData2.getId());
			List<ZkMenuData> menuList=zkEnMenuDao.queryListByObject(zkMenu);
			if(menuList!=null&&menuList.size()>0){
				for (ZkMenuData zkMenuData : menuList) {
					if(zkMenuData.getFunctionname().equals(year)){
						ZkContentInfo zkContentInfo=new ZkContentInfo();
						zkContentInfo.setStatus(BeanUtils.STATUS_1);
						zkContentInfo.setMenu_id(zkMenuData.getId());
						List<ZkContentInfoData> contentDataList=zkEnContentInfoDao.queryListByObject(zkContentInfo);
						if(contentDataList!=null&&contentDataList.size()>0){
							if(contentDataList.size()>2){
								list.addAll(contentDataList.subList(0, 3));
							}else{
								list.addAll(contentDataList);
							}
						}
						
					}
				}
			}
		}
		return list;
	}
	/**
	 * 
	 * @author JQchen
	 * @describe 鏍规嵁鑿滃崟ID鏌ヨ鍐呭鍒楄〃 
	 * @version 2015-11-28 涓嬪崍12:26:18 
	 * @param menuId
	 * @return
	 */
	@Override
	public List<ZkContentInfoData> selectContentByMenuId(String menuId) {
		log.info("鍐呭淇℃伅妯″潡---鏍规嵁鑿滃崟ID鏌ヨ鍐呭鍒楄〃 ---鎺ユ敹璇锋眰瀵硅薄:menuId{}"+menuId);
		ZkContentInfo zkContentInfo=new ZkContentInfo();
		zkContentInfo.setStatus(BeanUtils.STATUS_1);
		zkContentInfo.setMenu_id(menuId);
		List<ZkContentInfoData> list=zkEnContentInfoDao.queryListByObject(zkContentInfo);
		return list;
	}
	/**
	 * 
	 * @author JQchen
	 * @describe 鏍规嵁鑿滃崟ID鏌ヨ涓�骇鍐呭鍒楄〃 
	 * @version 2015-11-28 涓嬪崍12:26:18 
	 * @param menuId
	 * @return
	 */
	@Override
	public List<ZkContentInfoData> selectContentForLevel1ByMenuId(String menuId) {
		log.info("鍐呭淇℃伅妯″潡---鏍规嵁鑿滃崟ID鏌ヨ涓�骇鍐呭 ---鎺ユ敹璇锋眰瀵硅薄:menuId{}"+menuId);
		ZkContentInfo zkContentInfo=new ZkContentInfo();
		zkContentInfo.setStatus(BeanUtils.STATUS_1);
		zkContentInfo.setMenu_id(menuId);
		zkContentInfo.setNewslevel(ZkContentInfoUtil.NEWSLEVEL_1);
		List<ZkContentInfoData> list=zkEnContentInfoDao.queryListByObject(zkContentInfo);
		return list;
	}
	/**
	 * 
	 * @author JQchen
	 * @describe 鏍规嵁鑿滃崟ID鏌ヨ浜岀骇鍐呭鍒楄〃  
	 * @version 2015-11-28 涓嬪崍12:26:18 
	 * @param menuId
	 * @return
	 */
	@Override
	public List<ZkContentInfoData> selectContentForLevel2ByMenuId(String menuId) {
		log.info("鍐呭淇℃伅妯″潡---鏍规嵁鑿滃崟ID鏌ヨ浜岀骇鍐呭 ---鎺ユ敹璇锋眰瀵硅薄:menuId{}"+menuId);
		ZkContentInfo zkContentInfo=new ZkContentInfo();
		zkContentInfo.setStatus(BeanUtils.STATUS_1);
		zkContentInfo.setMenu_id(menuId);
		zkContentInfo.setNewslevel(ZkContentInfoUtil.NEWSLEVEL_2);
		List<ZkContentInfoData> list=zkEnContentInfoDao.queryListByObject(zkContentInfo);
		return list;
	}
	/**
	 * 
	 * @author JQchen
	 * @describe 鏍规嵁鑿滃崟ID鏌ヨ涓夌骇鍐呭鍒楄〃 
	 * @version 2015-11-28 涓嬪崍12:26:18 
	 * @param menuId
	 * @return
	 */
	@Override
	public List<ZkContentInfoData> selectContentForLevel3ByMenuId(String menuId) {
		log.info("鍐呭淇℃伅妯″潡---鏍规嵁鑿滃崟ID鏌ヨ涓夌骇鍐呭 ---鎺ユ敹璇锋眰瀵硅薄:menuId{}"+menuId);
		ZkContentInfo zkContentInfo=new ZkContentInfo();
		zkContentInfo.setStatus(BeanUtils.STATUS_1);
		zkContentInfo.setMenu_id(menuId);
		zkContentInfo.setNewslevel(ZkContentInfoUtil.NEWSLEVEL_3);
		List<ZkContentInfoData> list=zkEnContentInfoDao.queryListByObject(zkContentInfo);
		return list;
	}
	
	
	/**
	 * 鏌ヨ鏂伴椈鍔ㄦ�淇℃伅鐩稿叧
	 * @author JQchen
	 * @describe 鏍规嵁鑿滃崟ID鏌ヨ涓夌骇鍐呭 
	 * @version 2015-11-28 涓嬪崍12:26:18 
	 * @param menuId
	 * @return
	 */
	public List<ZkContentInfoData> selectContentNewsInfo(String menuId){
		log.info("鍐呭淇℃伅妯″潡---鏍规嵁鑿滃崟ID鏌ヨ涓�骇鍐呭 ---鎺ユ敹璇锋眰瀵硅薄:menuId{}"+menuId);
		ZkContentInfo zkContentInfo=new ZkContentInfo();
		zkContentInfo.setStatus(BeanUtils.STATUS_1);
		zkContentInfo.setMenu_id(menuId);
		zkContentInfo.setNewslevel(ZkContentInfoUtil.NEWSLEVEL_1);
		List<ZkContentInfoData> list=zkEnContentInfoDao.queryContentNewsInfo(zkContentInfo);
		return list;
	}
	
	
	/**
	 * 鏍规嵁鑿滃崟ID鍜屾椂闂存煡璇㈡枃绔犲垪琛�
	 * 
	 * @param menuId
	 * @param date
	 * @return
	 */
	@SuppressWarnings("deprecation")
	public List<ZkContentInfoData> selectContentByMenuIdDate(String menuId,String date){
		log.info("鍐呭淇℃伅妯″潡---鏍规嵁鑿滃崟ID鏌ヨ鍐呭鍒楄〃 ---鎺ユ敹璇锋眰瀵硅薄:menuId{}"+menuId);
		ZkContentInfo zkContentInfo=new ZkContentInfo();
		zkContentInfo.setStatus(BeanUtils.STATUS_1);
		zkContentInfo.setMenu_id(menuId);
		String startDate = date+"-01-01 00:00:00";
		String endDate = date+"-12-31 23:59:59";
		try{
			zkContentInfo.setBeginDate(DateUtil.parse(startDate,"yyyy-MM-dd HH:mm:ss"));
			zkContentInfo.setEndDate(DateUtil.parse(endDate,"yyyy-MM-dd HH:mm:ss"));
		}catch(Exception e){log.info("鍐呭淇℃伅妯″潡---鏍规嵁鑿滃崟ID----error"+e.getMessage());}
		List<ZkContentInfoData> list=zkEnContentInfoDao.queryListByObject(zkContentInfo);
		return list;
	}

	public List<ZkContentInfoData> getLuceneList(Map<String, Object> queryMap) {
		List<ZkContentInfoData> list=zkEnContentInfoDao.queryLucene(queryMap);
		return list;
	}

	public long queryLuceneAmount(Map<String, Object> queryMap){
		return zkEnContentInfoDao.queryLuceneAmount(queryMap);
	}
	
	@Override
	public List<ZkContentInfoData> getZkContentInfoList3ById(ZkContentInfo model) {
		return zkEnContentInfoDao.getZkContentInfoList3ById(model);
	}
	
}
