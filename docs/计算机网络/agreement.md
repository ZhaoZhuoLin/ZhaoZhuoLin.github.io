## 协议
网络协议为计算机网络中进行数据交换而建立的规则、标准或约定的集合。
### 层次划分
为了使不同计算机厂家生产的计算机能够相互通信，以便在更大的范围内建立计算机网络，**国际标准化组织（ISO）在1978年提出了“开放系统互联参考模型”，即著名的OSI/RM模型（Open System Interconnection/Reference Model）。**== 它将计算机网络体系结构的通信协议划分为七层，自下而上依次为：物理层（Physics Layer）、数据链路层（Data Link Layer）、网络层（Network Layer）、传输层（Transport Layer）、会话层（Session Layer）、表示层（Presentation Layer）、应用层（Application Layer）。

::: tip 说明
其中第四层完成数据传送服务，上面三层面向用户。对于每一层，至少制定两项标准：服务定义和协议规范。前者给出了该层所提供的服务的准确定义，后者详细描述了该协议的动作和各种有关规程，以保证服务的提供。
:::

|名称|
|:-|
|应用层|
|表示层|
|会话层|
|传输层|
|网络层|
|数据链路层|
|物理层|

### 常用协议

#### TCP/IP协议
TCP/IP（Transport Control Protocol/Internet Protocol，传输控制协议/Internet协议）的历史应当追溯到Internet的前身—ARPAnet时代。为了实现不同网络之间的互连，美国国防部于1977年到1979年间制定了TCP/IP体系结构和协议。TCP/IP是由一组具有专业用途的多个子协议组合而成的，这些子协议包括TCP、IP、UDP、ARP、ICMP等。TCP/IP凭借其实现成本低、在多平台间通信安全可靠以及可路由性等优势迅速发展，并成为Internet中的标准协议。在上世纪90年代，TCP/IP已经成为局域网中的首选协议，在最新的操作系统（如Windows7、Windows XP、Windows Server2003等）中已经将TCP/IP作为其默认安装的通信协议。

#### NetBEUI
即NetBios Enhanced User Interface ，或NetBios增强用户接口。它是NetBIOS协议的增强版本，曾被许多操作系统采用，例如Windows for Workgroup、Win 9x系列、Windows NT等。NETBEUI协议在许多情形下很有用，是WINDOWS98之前的操作系统的缺省协议。NetBEUI协议是一种短小精悍、通信效率高的广播型协议，安装后不需要进行设置，特别适合于在“网络邻居”传送数据。所以建议除了TCP/IP协议之外，小型局域网的计算机也可以安上NetBEUI协议。另外还有一点要注意，如果一台只装了TCP/IP协议的WINDOWS98机器要想加入到WINNT域，也必须安装NetBEUI协议。

#### IPX/SPX协议
本来就是Novell开发的专用于NetWare网络中的协议，但是也非常常用--大部分可以联机的游戏都支持IPX/SPX协议，比如星际争霸，反恐精英等等。虽然这些游戏通过TCP/IP协议也能联机，但显然还是通过IPX/SPX协议更省事，因为根本不需要任何设置。除此除此之外，IPX/SPX协议在非局域网络中的用途似乎并不是很大。如果确定不在局域网中联机玩游戏，那么这个协议可有可无。

### 划分
::: tip 物理层
以太网 · 调制解调器 · 电力线通信(PLC) · SONET/SDH · G.709 · 光导纤维 · 同轴电缆 · 双绞线等
:::
::: tip 数据链路层
Wi-Fi(IEEE 802.11) · WiMAX(IEEE 802.16) ·ATM · DTM · 令牌环 · 以太网 ·FDDI · 帧中继 · GPRS · EVDO ·HSPA · HDLC · PPP · L2TP ·PPTP · ISDN·STP · CSMA/CD等
:::
::: tip 网络层协议
IP (IPv4 · IPv6) · ICMP· ICMPv6·IGMP ·IS-IS · IPsec · ARP · RARP · RIP等
:::

::: tip 传输层协议
TCP · UDP · TLS · DCCP · SCTP · RSVP · OSPF 等
:::
::: tip 应用层协议
DHCP ·DNS · FTP · Gopher · HTTP· IMAP4 · IRC · NNTP · XMPP ·POP3 · SIP · SMTP ·SNMP · SSH ·TELNET · RPC · RTCP · RTP ·RTSP· SDP · SOAP · GTP · STUN · NTP· SSDP · BGP 等
:::
---  
参考学习链接原文地址: https://zhuanlan.zhihu.com/p/594245730