const os = require('os');

function getSystemInfo() {
    return {
        osType: os.type(),
        osRelease: os.release(),
        architecture: os.arch(),
        cpuInfo: os.cpus(),
        totalMemory: os.totalmem(),
        freeMemory: os.freemem(),
        userInfo: os.userInfo()
    };
}

const systemInfo = getSystemInfo();
console.log(systemInfo);
