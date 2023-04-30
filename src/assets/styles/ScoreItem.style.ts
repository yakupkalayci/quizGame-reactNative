import { StyleSheet } from "react-native";

export default StyleSheet.create({
    safeAreaView: {
      flex: 1,
    },
    textHeader: {
      fontSize: 18 * 2,
      marginBottom: 0,
      marginStart: 18,
      marginTop: 18 * 2,
      fontWeight: 'bold',
    },
    rowFront: {
      justifyContent: 'center',
      paddingVertical: 18,
      backgroundColor: '#ffffff',
      width: 500,
      paddingRight: 150,
      borderBottomColor: 'black',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    frontText: {
      color: '#000000',
      fontSize: 18,
    },
    rowBack: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#ffffff',
      flexDirection: 'row',
      paddingHorizontal: 18,
    },
    backTextNeutral: {
      color: '#0000cc',
      fontSize: 18,
    },
    backTextDanger: {
      color: '#000000',
      fontSize: 18,
    },
    backTextWarning: {
      color: '#8e5500',
      fontSize: 18,
    },
    backTextSuccess: {
      color: '#004c45',
      fontSize: 18,
    },
    backRightBtn: {
      alignItems: 'center',
      bottom: 0,
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      width: 75,
    },
    infoBtn: {
      backgroundColor: '#2196f3',
      right: 75,
    },
    dangerBtn: {
      backgroundColor: '#e91e63',
      right: 0,
    },
    backLeftBtn: {
      alignItems: 'center',
      bottom: 0,
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      width: '50%',
    },
    successBtn: {
      backgroundColor: '#4caf50',
      left: 75,
    },
    warningBtn: {
      backgroundColor: '#ffeb3b',
      left: 0,
    },
    warningImage: {
      width: 32,
      height: 32,
      tintColor: '#000000',
    },
    dangerImage: {
      width: 32,
      height: 32,
      tintColor: '#ffffff',
    },
    infoImage: {
      width: 32,
      height: 32,
      tintColor: '#ffffff',
    },
    floatingButton: {
      position: 'absolute',
      bottom: 18 * 2,
      end: 18,
      padding: 18,
      backgroundColor: '#ffeb3b',
      borderRadius: 99999,
    },
    floatingButtonImg: {
      width: 32,
      height: 32,
      tintColor: '#000000',
    },
    floatingButtonBadge: {
      position: 'absolute',
      top: 0,
      end: 0,
      backgroundColor: '#e91e63',
      borderRadius: 99999,
      width: 24,
      height: 24,
      justifyContent: 'center',
      alignItems: 'center',
    },
    floatingButtonBadgeText: {
      fontSize: 12,
      color: '#ffffff',
      textAlign: 'center',
    },
    infoText: {
        fontSize: 20,
        marginTop: 20,
        paddingBottom: 30
    },
    playerText: {
        paddingRight: 70
    },
    score: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
  });