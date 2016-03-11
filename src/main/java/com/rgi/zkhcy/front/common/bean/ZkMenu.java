// Copyright (C) 2012-2015 JIEZHI All rights reserved
package com.rgi.zkhcy.front.common.bean;

import java.util.ArrayList;
import java.util.List;

import com.rgi.zkhcy.front.common.common.persistence.BaseEntity;

/** 
 * 类 名: ZkMenu <br/>
 * 描 述: 中科菜单
 * 作 者: JQchen <br/>
 * 创 建： 2015-11-23 <br/>
 *
 * 历 史: (版本)作者 时间 <br/>
 */
public class ZkMenu extends BaseEntity<ZkMenu> {

	private static final long serialVersionUID = 1L;
	
	private java.lang.String id;	private java.lang.Integer functioniframe;//   	private java.lang.Integer functionlevel;//   	private java.lang.String functionname;//   	private java.lang.String functionorder;//   	private java.lang.String functionurl;//   	private java.lang.String parentfunctionid;//   	private java.lang.String iconid;//   	private java.lang.String desk_iconid;//   	private java.lang.Integer functiontype;//   	private java.lang.String functionmark;//   	private java.lang.Integer show_type;//   显示类型：1：首部显示 2：底部显示 3：其他显示
	
	private List<ZkMenu> subList=new ArrayList<ZkMenu>();//子菜单列表	public java.lang.String getId() {
		return id;
	}
	public void setId(java.lang.String id) {
		this.id = id;
	}
	public java.lang.Integer getFunctioniframe() {	    return this.functioniframe;	}	public List<ZkMenu> getSubList() {
		return subList;
	}
	public void setSubList(List<ZkMenu> subList) {
		this.subList = subList;
	}
	public void setFunctioniframe(java.lang.Integer functioniframe) {	    this.functioniframe=functioniframe;	}	public java.lang.Integer getFunctionlevel() {	    return this.functionlevel;	}	public void setFunctionlevel(java.lang.Integer functionlevel) {	    this.functionlevel=functionlevel;	}	public java.lang.String getFunctionname() {	    return this.functionname;	}	public void setFunctionname(java.lang.String functionname) {	    this.functionname=functionname;	}	public java.lang.String getFunctionorder() {	    return this.functionorder;	}	public void setFunctionorder(java.lang.String functionorder) {	    this.functionorder=functionorder;	}	public java.lang.String getFunctionurl() {	    return this.functionurl;	}	public void setFunctionurl(java.lang.String functionurl) {	    this.functionurl=functionurl;	}	public java.lang.String getParentfunctionid() {	    return this.parentfunctionid;	}	public void setParentfunctionid(java.lang.String parentfunctionid) {	    this.parentfunctionid=parentfunctionid;	}	public java.lang.String getIconid() {	    return this.iconid;	}	public void setIconid(java.lang.String iconid) {	    this.iconid=iconid;	}	public java.lang.String getDesk_iconid() {	    return this.desk_iconid;	}	public void setDesk_iconid(java.lang.String desk_iconid) {	    this.desk_iconid=desk_iconid;	}	public java.lang.Integer getFunctiontype() {	    return this.functiontype;	}	public void setFunctiontype(java.lang.Integer functiontype) {	    this.functiontype=functiontype;	}	public java.lang.String getFunctionmark() {	    return this.functionmark;	}	public void setFunctionmark(java.lang.String functionmark) {	    this.functionmark=functionmark;	}	public java.lang.Integer getShow_type() {	    return this.show_type;	}	public void setShow_type(java.lang.Integer show_type) {	    this.show_type=show_type;	}
	
}