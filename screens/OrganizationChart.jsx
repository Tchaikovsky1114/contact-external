import { useWindowDimensions } from 'react-native';
import { useEffect, useState } from 'react';
import { buttonColors } from '../colors';
import SecondaryContactModal from '../component/member-modal/MemberModal';
import adpiaImage from '../assets/swlogo.png';
import GroupLayout from '../component/organization-chart/GroupLayout';
import DirectModal from '../component/direct-modal/DirectModal';
import GroupList from '../component/organization-chart/GroupList';
import { useRoute } from '@react-navigation/native';
import useModal from '../hooks/useModal';
import useOrganizations from '../hooks/useOrganizations';
import usePhone from '../hooks/usePhone';
import BackupButton from '../component/organization-chart/BackupButton';
import VersionStatusLine from '../component/organization-chart/VersionStatusLine';
import SearchBox from '../component/searchform/SearchBox';
import Header from '../component/organization-chart/Header';

const OrganizationChart = () => {
  const {
    params: { showChart },
  } = useRoute();
  const {
    tab,
    organization,
    error,
    initData,
    replaceBackupDataHandler,
    group,
    sortGroup,
    mergeMember,
    totalMembers,
  } = useOrganizations();

  const [isOpen, setIsOpen] = useState(false);
  const [directModalVisible, setDirectModalVisible] = useState(false);
  const { handleShowModal, handleCloseModal, memberInfo } = useModal(
    isOpen,
    setIsOpen
  );
  const {
    handleOpenModal: handleOpenDirectModal,
    handleCloseModal: handleCloseDirectModal,
  } = useModal(directModalVisible, setDirectModalVisible);
  const { pressCall, pressSMS } = usePhone();
  const [tabIndex, setTabIndex] = useState(0);
  const [foundMembers, setFoundMembers] = useState([]);
  const { width } = useWindowDimensions();

  useEffect(() => {
    initData();
    if (!showChart) return;
    setTabIndex(showChart);
  }, []);

  useEffect(() => {
    if (!organization) return;
    mergeMember(organization);
  }, [organization]);

  useEffect(() => {
    sortGroup(tabIndex);
  }, [organization, tabIndex]);

  return (
    <>
      <DirectModal
        pressCall={pressCall}
        directModalVisible={directModalVisible}
        handleOpenDirectModal={handleOpenDirectModal}
        handleCloseDirectModal={handleCloseDirectModal}
        handleShowModal={handleShowModal}
        width={width}
      />
      <SecondaryContactModal
        accentColor={buttonColors[3]}
        logoImage={adpiaImage}
        tabIndex={tabIndex}
        isOpen={isOpen}
        memberInfo={memberInfo}
        handleShowModal={handleShowModal}
        handleCloseModal={handleCloseModal}
        pressCall={pressCall}
        pressSMS={pressSMS}
      />

      <GroupLayout>
        <Header
          handleOpenDirectModal={handleOpenDirectModal}
          setFoundMembers={setFoundMembers}
          setTabIndex={setTabIndex}
          totalMembers={totalMembers}
          tabIndex={tabIndex}
          tab={tab}
          width={width}
        />

        {/* 유저 검색 결과 */}
        {foundMembers.length > 0 && (
          <SearchBox
            foundMembers={foundMembers}
            handleShowModal={handleShowModal}
            width={width}
          />
        )}

        {organization && group && (
          <GroupList
            group={group}
            handleShowModal={handleShowModal}
            tabIndex={tabIndex}
            setFoundMembers={setFoundMembers}
            setTabIndex={setTabIndex}
          />
        )}
        {/* 임시데이터 */}
        {error && !organization && (
          <BackupButton
            onPress={replaceBackupDataHandler}
          />
        )}
        <VersionStatusLine />
      </GroupLayout>
    </>
  );
};

export default OrganizationChart;
