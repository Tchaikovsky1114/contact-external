import { FlatList, Image, Text, View, useWindowDimensions } from 'react-native';
import  { useEffect, useState } from 'react';
import { buttonColors, colors } from '../colors';
import SecondaryContactModal from '../component/SecondaryContactModal';
import adpiaImage from '../assets/swlogo.png';
import OrgazationHeaderTabButton from '../component/orgazationchart/OrgazationHeaderTabButton';
import OrgazationGroupLayout from '../component/orgazationchart/OrgazationGroupLayout';
import OrgazationHeadLayout from '../component/orgazationchart/OrgazationHeadLayout';
import DirectModal from '../component/directmodal/DirectModal';
import OrgazationChartFlatList from '../component/orgazationchart/OrgazationChartFlatList';
import Constants from 'expo-constants'
import starImage from '../assets/star.png'

import { useRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import FindMemberForm from '../component/findmemberform/FindMemberForm';
import useModal from '../hooks/useModal';
import useOrganizations from '../hooks/useOrganizations';
import usePhone from '../hooks/usePhone';

const OrgazationChart = () => {
  const { params: { showChart } } = useRoute();
  const { tab, organization, error, initData, replaceBackupDataHandler, group, sortGroup,mergeMember,totalMembers } = useOrganizations();
  const [isOpen, setIsOpen] = useState(false);
  const [directModalVisible, setDirectModalVisible] = useState(false);
  const { handleShowModal, handleCloseModal, memberInfo } = useModal(isOpen,setIsOpen);
  const { handleOpenModal: handleOpenDirectModal, handleCloseModal: handleCloseDirectModal } = useModal(directModalVisible,setDirectModalVisible);
  const { pressCall } = usePhone();
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
  }, [organization, tabIndex])

  return (
    <>
      <DirectModal
        pressCall={pressCall}
        directModalVisible={directModalVisible}
        handleOpenDirectModal={handleOpenDirectModal}
        handleCloseDirectModal={handleCloseDirectModal}
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
      />
      <OrgazationGroupLayout>
        <OrgazationHeadLayout>
          <View style={{flex:0.9,flexDirection:'row',gap:4}}>
          {tab &&
            tab.map((item, index) => {
              if(typeof item === 'undefined') return;
              return (
              <OrgazationHeaderTabButton
                index={index}
                item={item}
                tabIndex={tabIndex}
                setTabIndex={setTabIndex}
                key={item}
              />
              )}
            )}
            </View>
            <FindMemberForm setFoundMembers={setFoundMembers} totalMembers={totalMembers} />
          <TouchableOpacity
          style={{paddingVertical:8, paddingHorizontal:8,flex:0.1,flexDirection:'column',alignItems:'center'}}
          onPress={handleOpenDirectModal}>
            <Image source={starImage} style={{width: width < 330 ? 24 : width < 440 ? 32 : 40, height: width < 330 ? 19.6 : width < 440 ? 28 : 32}} />
          </TouchableOpacity>
        </OrgazationHeadLayout>

        {/* 유저 검색 결과 */}
        {foundMembers.length > 0  && (
          <>
          <View style={{marginTop:width < 330 ? 60 : width < 500 ? 80 : 120,marginBottom:16,width:'100%',justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:16}}>총 <Text style={{fontSize:20,color:'#2d63e2'}}>{foundMembers.length}</Text>명이 검색되었습니다.</Text>
          </View>
          <View>
            <FlatList
              horizontal
              style={{  
                backgroundColor:'#fff',
                width:'100%',
                borderRadius: 4,
                elevation:2,
              }}
              contentContainerStyle={{alignItems:'center',paddingVertical:16,paddingHorizontal:8,}}
              data={foundMembers.sort((a,b) => a.staff_name < b.staff_name ? - 1 : 1)}
              keyExtractor={(item) => item.staff_name}
              renderItem={({ item }) => (
                <TouchableOpacity style={{
                  borderRadius:8,
                  justifyContent:'center',
                  alignItems:'center',
                  gap: 4,
                  elevation:5,
                  backgroundColor:'#fff',
                  paddingHorizontal:8,
                  marginRight:16,
                  paddingVertical:8,
                }}
                onPress={() => handleShowModal(item)}
                >
                  <Image resizeMode='contain' style={{width: width < 500 ? 48 : 60,height: width < 500 ? 48 : 60}} borderRadius={width < 500 ? 48 : 60} source={{uri: item.photo_file || 'https://www.nicepng.com/png/detail/933-9332131_profile-picture-default-png.png'}} />
                  <Text style={{fontWeight:'bold'}}>{item.staff_name.substr(0,3)}</Text>
                </TouchableOpacity>
              )}
              />
              </View>
            </>
          )}

        {(organization && group) && <OrgazationChartFlatList
          group={group}
          handleShowModal={handleShowModal}
          tabIndex={tabIndex}
          setFoundMembers={setFoundMembers}
          setTabIndex={setTabIndex}
        />}
        {/* 임시데이터로 보기 */}
          {
            (error && !organization) && (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity
            onPress={replaceBackupDataHandler}
            style={{justifyContent:'center',alignItems:'center', width:200,height:56,borderWidth:1,borderColor:colors.default,borderRadius:12}}>
              <Text style={{fontSize: 16}}>백업데이터 불러오기</Text>
            </TouchableOpacity>
            </View>
            )}
        <View style={{width:'100%',height:12,alignItems:'flex-end',backgroundColor:'transparent'}}>
        <Text style={{color:'#ccc',fontSize:10,}}>v{Constants.expoConfig.version}</Text>
        </View>
      </OrgazationGroupLayout>
    </>
  );
};

export default OrgazationChart;
