const os = require('os');

function getSystemInfo() {
    return {
        userInfo: os.userInfo(),
        osType: os.type(),
        architecture: os.arch(),
        osRelease: os.release(),
        cpuInfo: os.cpus(),
        freeMemory: os.freemem(),
        totalMemory: os.totalmem()
    };
}

const systemInfo = getSystemInfo();
console.log(systemInfo);
