const API_BASE = "http://192.168.169.1"; // 后面改成你们板子的实际地址

let mediaRecorder = null;
let audioChunks = [];
let audioBlob = null;
let audioUrl = null;

const sceneTextMap = {
  welcome: "欢迎回家",
  leave: "离开提醒",
  night: "夜间模式提示",
  read: "阅读模式提示",
  alert: "异常报警",
  custom1: "自定义1",
  custom2: "自定义2",
};

function setMessage(text) {
  document.getElementById("messageBox").textContent = text;
}

function updateLastUpdateTime() {
  const now = new Date();
  const timeText = now.toLocaleTimeString();
  document.getElementById("lastUpdate").textContent = timeText;
}

function updateSceneLabel() {
  const scene = document.getElementById("voiceScene").value;
  document.getElementById("sceneLabel").textContent =
    sceneTextMap[scene] || scene;
}

async function fetchStatus() {
  try {
    // 真接口版本：
    // const response = await fetch(`${API_BASE}/api/status`);
    // const result = await response.json();
    // const data = result.data;

    const data = {
      online: true,
      wifi: "已连接",
      mode: "阅读模式",
      power: "3.2 W",
      brightness: "78 %",
      battery: "86 %",
      human_detected: "有人",
      lux: "126 lux",
      temperature: "24.8 ℃",
      humidity: "51 %",
      imu: "静止",
      ai: "检测到阅读场景",
      runtime: "2.4 h",
      energySaved: "0.18 kWh",
    };

    document.getElementById("online").textContent = data.online
      ? "在线"
      : "离线";
    document.getElementById("online").className = data.online
      ? "status online"
      : "status offline";

    document.getElementById("wifi").textContent = data.wifi;
    document.getElementById("mode").textContent = data.mode;
    document.getElementById("power").textContent = data.power;
    document.getElementById("brightness").textContent = data.brightness;
    document.getElementById("battery").textContent = data.battery;

    document.getElementById("human").textContent = data.human_detected;
    document.getElementById("lux").textContent = data.lux;
    document.getElementById("temp").textContent = data.temperature;
    document.getElementById("humidity").textContent = data.humidity;
    document.getElementById("imu").textContent = data.imu;
    document.getElementById("ai").textContent = data.ai;

    document.getElementById("powerDetail").textContent = data.power;
    document.getElementById("runtime").textContent = data.runtime;
    document.getElementById("energySaved").textContent = data.energySaved;

    updateLastUpdateTime();
  } catch (error) {
    console.error("获取状态失败:", error);
    document.getElementById("online").textContent = "离线";
    document.getElementById("online").className = "status offline";
    setMessage("获取设备状态失败");
  }
}

async function setMode(mode) {
  try {
    console.log("设置模式:", mode);

    // 真接口版本：
    // const response = await fetch(`${API_BASE}/api/mode`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ mode })
    // });
    // const result = await response.json();

    const modeTextMap = {
      auto: "自动模式",
      read: "阅读模式",
      night: "夜灯模式",
      save: "节能模式",
    };

    document.getElementById("mode").textContent = modeTextMap[mode] || mode;
    setMessage(`模式已切换为：${modeTextMap[mode] || mode}`);
  } catch (error) {
    console.error("设置模式失败:", error);
    setMessage("模式切换失败");
  }
}

async function lightOn() {
  try {
    console.log("手动开灯");
    // await fetch(`${API_BASE}/api/light_on`, { method: "POST" });
    setMessage("已发送开灯指令");
  } catch (error) {
    console.error("开灯失败:", error);
    setMessage("开灯失败");
  }
}

async function lightOff() {
  try {
    console.log("手动关灯");
    // await fetch(`${API_BASE}/api/light_off`, { method: "POST" });
    setMessage("已发送关灯指令");
  } catch (error) {
    console.error("关灯失败:", error);
    setMessage("关灯失败");
  }
}

async function saveSettings() {
  const threshold = document.getElementById("threshold").value;
  const delay = document.getElementById("delay").value;
  const volume = document.getElementById("volume").value;

  try {
    console.log("保存设置:", { threshold, delay, volume });

    // 真接口版本：
    // await fetch(`${API_BASE}/api/settings`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     light_threshold: Number(threshold),
    //     delay_off: Number(delay),
    //     volume: Number(volume)
    //   })
    // });

    setMessage("参数设置已保存");
  } catch (error) {
    console.error("保存设置失败:", error);
    setMessage("保存设置失败");
  }
}

async function startRecording() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    audioChunks = [];

    mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        audioChunks.push(event.data);
      }
    };

    mediaRecorder.onstop = () => {
      audioBlob = new Blob(audioChunks, { type: "audio/webm" });

      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
      }

      audioUrl = URL.createObjectURL(audioBlob);
      document.getElementById("audioPreview").src = audioUrl;
      document.getElementById("voiceStatus").textContent = "录音完成";
      setMessage("录音完成，可以试听或上传");
    };

    mediaRecorder.start();
    document.getElementById("voiceStatus").textContent = "录音中...";
    setMessage("正在录音");
  } catch (error) {
    console.error("无法开始录音:", error);
    document.getElementById("voiceStatus").textContent = "录音失败";
    setMessage("录音失败，请检查麦克风权限");
  }
}

function stopRecording() {
  if (mediaRecorder && mediaRecorder.state !== "inactive") {
    mediaRecorder.stop();
  } else {
    document.getElementById("voiceStatus").textContent =
      "当前没有正在进行的录音";
    setMessage("当前没有正在进行的录音");
  }
}

function playPreview() {
  const audio = document.getElementById("audioPreview");

  if (audio.src) {
    audio.play();
    setMessage("正在试听录音");
  } else {
    alert("请先录音");
  }
}

async function uploadVoice() {
  const scene = document.getElementById("voiceScene").value;

  if (!audioBlob) {
    alert("请先录音");
    return;
  }

  const formData = new FormData();
  formData.append("file", audioBlob, `${scene}.webm`);
  formData.append("scene", scene);

  try {
    console.log("上传场景语音:", scene);

    // 真接口版本：
    // const response = await fetch(`${API_BASE}/api/upload_voice`, {
    //   method: "POST",
    //   body: formData
    // });
    // if (!response.ok) throw new Error("上传失败");

    document.getElementById("voiceStatus").textContent =
      `${sceneTextMap[scene] || scene} 上传成功（模拟）`;
    setMessage(`${sceneTextMap[scene] || scene} 上传成功`);
  } catch (error) {
    console.error("上传失败:", error);
    document.getElementById("voiceStatus").textContent =
      `${sceneTextMap[scene] || scene} 上传失败`;
    setMessage(`${sceneTextMap[scene] || scene} 上传失败`);
  }
}

async function playSceneVoice(scene) {
  try {
    console.log("播放场景语音:", scene);

    // 真接口版本：
    // await fetch(`${API_BASE}/api/play_voice`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ scene })
    // });

    setMessage(`已请求播放：${sceneTextMap[scene] || scene}`);
  } catch (error) {
    console.error("播放失败:", error);
    setMessage("播放场景语音失败");
  }
}

document
  .getElementById("voiceScene")
  .addEventListener("change", updateSceneLabel);

fetchStatus();
updateSceneLabel();
updateLastUpdateTime();
setInterval(fetchStatus, 3000);
