function getUUID() {
    var appName = NSBundle.mainBundle.infoDictionary.objectForKey(kCFBundleNameKey);
    var strApplicationUUID = SAMKeychain.passwordForService(appName, "incoding");
    if (!strApplicationUUID){
        strApplicationUUID = UIDevice.currentDevice.identifierForVendor.UUIDString;
        SAMKeychain.setPassword(strApplicationUUID, appName, "incoding");
    }

    return strApplicationUUID;
}
exports.getUUID = getUUID;
