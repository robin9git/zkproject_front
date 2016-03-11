/**
 * Copyright &copy; 2012-2014 <a href="https://github.com/thinkgem/jeesite">JeeSite</a> All rights reserved.
 */
package com.rgi.zkhcy.front.module.common;

import java.util.List;

/**
 * DAO支持类实现
 * @author ThinkGem
 * @version 2014-05-16
 */
public interface BaseDao<T,K> {

	/**
	 * 插入数据
	 * @param entity
	 * @return
	 */
	public int add(T entity);
	
	/**
	 * 删除数据（物理删除，请慎用！！！）
	 * @param entity
	 * @return
	 */
	public int delete(T entity);
	
	/**
	 * 更新数据--根据记录主键
	 * @param entity
	 * @return
	 */
	public int updateById(T entity);
	
	/**
	 * 更新数据--根据记录对象中设置的值
	 * @param entity
	 * @return
	 */
	public int updateByObject(T entity);
	
	/**
	 * 获取单条数据--根据记录主键
	 * @param id
	 * @return
	 */
	public K queryById(Object id);
	
	/**
	 * 获取单条数据--根据记录对象中设置的值
	 * @param entity
	 * @return
	 */
	public T queryByObject(T entity);
	
	/**
	 * 描 述：根据实体类对象查询列表 <br/>
	 * 作 者：jiezhi<br/>
	 * 历 史: (版本)作者 时间 注释 <br/>
	 * @param entity
	 * @return
	 */
	public List<K> queryListByObject(T entity);
	
	/**
	 * 查询数据列表，如果需要分页，请设置分页对象，如：entity.setPage(new Page<T>());
	 * @param entity
	 * @return
	 */
	public List<T> queryList4Page(T entity);
	
	/**
	 * 获取记录的总数量
	 * @param entity
	 * @return
	 */
	public long queryAmount(T entity);
	
	/**
	 * 查询所有数据列表---请慎用！！！
	 * @return
	 */
	public List<K> queryAllList();

}