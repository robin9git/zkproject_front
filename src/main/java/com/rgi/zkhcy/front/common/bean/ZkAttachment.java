// Copyright (C) 2012-2015 JIEZHI All rights reserved
package com.rgi.zkhcy.front.common.bean;

import com.rgi.zkhcy.front.common.common.persistence.BaseEntity;

/** 
 * 类 名: ZkAttachment <br/>
 * 描 述: 文件
 * 作 者: JQchen <br/>
 * 创 建： 2015-11-23 <br/>
 *
 * 历 史: (版本)作者 时间 <br/>
 */
public class ZkAttachment extends BaseEntity<ZkAttachment> {

	private static final long serialVersionUID = 1L;
		private java.lang.String id;//   	private java.lang.String menu;//   	private java.lang.String year;//   	private java.lang.String title1;//   标题	private java.lang.String title2;//   	private java.lang.String picsrc;//   	private java.lang.String filesrc;//   	private java.lang.Object des;//   内容	private java.util.Date creatdate;//   	private java.lang.String filesize;//   文件大小	private java.lang.String filstype;//   文件类型	public java.lang.String getId() {	    return this.id;	}	public void setId(java.lang.String id) {	    this.id=id;	}	public java.lang.String getMenu() {	    return this.menu;	}	public void setMenu(java.lang.String menu) {	    this.menu=menu;	}	public java.lang.String getYear() {	    return this.year;	}	public void setYear(java.lang.String year) {	    this.year=year;	}	public java.lang.String getTitle1() {	    return this.title1;	}	public void setTitle1(java.lang.String title1) {	    this.title1=title1;	}	public java.lang.String getTitle2() {	    return this.title2;	}	public void setTitle2(java.lang.String title2) {	    this.title2=title2;	}	public java.lang.String getPicsrc() {	    return this.picsrc;	}	public void setPicsrc(java.lang.String picsrc) {	    this.picsrc=picsrc;	}	public java.lang.String getFilesrc() {	    return this.filesrc;	}	public void setFilesrc(java.lang.String filesrc) {	    this.filesrc=filesrc;	}	public java.lang.Object getDes() {	    return this.des;	}	public void setDes(java.lang.Object des) {	    this.des=des;	}	public java.util.Date getCreatdate() {	    return this.creatdate;	}	public void setCreatdate(java.util.Date creatdate) {	    this.creatdate=creatdate;	}	public java.lang.String getFilesize() {	    return this.filesize;	}	public void setFilesize(java.lang.String filesize) {	    this.filesize=filesize;	}	public java.lang.String getFilstype() {	    return this.filstype;	}	public void setFilstype(java.lang.String filstype) {	    this.filstype=filstype;	}
	
}