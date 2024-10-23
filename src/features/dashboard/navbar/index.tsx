import React from "react";
import Wrapper from "../../../components/navbar/wrapper";
import Item from "../../../components/navbar/item";
import Logo from "../../../components/header/logo";
// icons

import { MdDashboard, MdAnalytics } from "react-icons/md";
import { SiGoogledocs } from "react-icons/si";
import {
  IoPeopleSharp,
  IoNotificationsSharp,
  IoSettings,
} from "react-icons/io5";
import { TbReportSearch } from "react-icons/tb";
import { GrTask, GrAnnounce } from "react-icons/gr";
export default function Navbar() {
  return (
    <>
      <Wrapper>
        <Logo />
        <Item className="" href="/">
          <MdDashboard className="w-6 h-6" /> Overview
        </Item>
        <Item href="/analytics">
          <MdAnalytics className="w-6 h-6" />
          Analytics
        </Item>
        <Item href="/leads">
          <SiGoogledocs className="w-6 h-6" />
          Leads
        </Item>
        <Item href="/reports">
          <TbReportSearch className="w-6 h-6" />
          Reports
        </Item>
        <Item href="#">
          <IoPeopleSharp className="w-6 h-6" />
          People
        </Item>
        <Item href="#">
          <GrTask className="w-6 h-6" />
          Tasks
        </Item>
        <Item href="#">
          <GrAnnounce className="w-6 h-6" />
          Annoucements
        </Item>

        <Item className="mt-auto" href="#">
          <IoNotificationsSharp className="w-6 h-6" />
          Notification
        </Item>
        <Item className="mb-10" href="#">
          <IoSettings className="w-6 h-6" />
          Settings
        </Item>
      </Wrapper>
    </>
  );
}
