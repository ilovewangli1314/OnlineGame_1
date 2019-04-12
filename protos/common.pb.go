// Code generated by protoc-gen-go. DO NOT EDIT.
// source: common.proto

package pbcommon

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

// Response represents a common response
type Response struct {
	Code                 int32    `protobuf:"varint,1,opt,name=Code,proto3" json:"Code,omitempty"`
	Msg                  string   `protobuf:"bytes,2,opt,name=Msg,proto3" json:"Msg,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Response) Reset()         { *m = Response{} }
func (m *Response) String() string { return proto.CompactTextString(m) }
func (*Response) ProtoMessage()    {}
func (*Response) Descriptor() ([]byte, []int) {
	return fileDescriptor_common_bee365a452b835ab, []int{0}
}
func (m *Response) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Response.Unmarshal(m, b)
}
func (m *Response) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Response.Marshal(b, m, deterministic)
}
func (dst *Response) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Response.Merge(dst, src)
}
func (m *Response) XXX_Size() int {
	return xxx_messageInfo_Response.Size(m)
}
func (m *Response) XXX_DiscardUnknown() {
	xxx_messageInfo_Response.DiscardUnknown(m)
}

var xxx_messageInfo_Response proto.InternalMessageInfo

func (m *Response) GetCode() int32 {
	if m != nil {
		return m.Code
	}
	return 0
}

func (m *Response) GetMsg() string {
	if m != nil {
		return m.Msg
	}
	return ""
}

type RPCMsg struct {
	Route                string   `protobuf:"bytes,1,opt,name=Route,proto3" json:"Route,omitempty"`
	Msg                  string   `protobuf:"bytes,2,opt,name=Msg,proto3" json:"Msg,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *RPCMsg) Reset()         { *m = RPCMsg{} }
func (m *RPCMsg) String() string { return proto.CompactTextString(m) }
func (*RPCMsg) ProtoMessage()    {}
func (*RPCMsg) Descriptor() ([]byte, []int) {
	return fileDescriptor_common_bee365a452b835ab, []int{1}
}
func (m *RPCMsg) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_RPCMsg.Unmarshal(m, b)
}
func (m *RPCMsg) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_RPCMsg.Marshal(b, m, deterministic)
}
func (dst *RPCMsg) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RPCMsg.Merge(dst, src)
}
func (m *RPCMsg) XXX_Size() int {
	return xxx_messageInfo_RPCMsg.Size(m)
}
func (m *RPCMsg) XXX_DiscardUnknown() {
	xxx_messageInfo_RPCMsg.DiscardUnknown(m)
}

var xxx_messageInfo_RPCMsg proto.InternalMessageInfo

func (m *RPCMsg) GetRoute() string {
	if m != nil {
		return m.Route
	}
	return ""
}

func (m *RPCMsg) GetMsg() string {
	if m != nil {
		return m.Msg
	}
	return ""
}

func init() {
	proto.RegisterType((*Response)(nil), "pbcommon.Response")
	proto.RegisterType((*RPCMsg)(nil), "pbcommon.RPCMsg")
}

func init() { proto.RegisterFile("common.proto", fileDescriptor_common_bee365a452b835ab) }

var fileDescriptor_common_bee365a452b835ab = []byte{
	// 119 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0xe2, 0x49, 0xce, 0xcf, 0xcd,
	0xcd, 0xcf, 0xd3, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0xe2, 0x28, 0x48, 0x82, 0xf0, 0x95, 0x0c,
	0xb8, 0x38, 0x82, 0x52, 0x8b, 0x0b, 0xf2, 0xf3, 0x8a, 0x53, 0x85, 0x84, 0xb8, 0x58, 0x9c, 0xf3,
	0x53, 0x52, 0x25, 0x18, 0x15, 0x18, 0x35, 0x58, 0x83, 0xc0, 0x6c, 0x21, 0x01, 0x2e, 0x66, 0xdf,
	0xe2, 0x74, 0x09, 0x26, 0x05, 0x46, 0x0d, 0xce, 0x20, 0x10, 0x53, 0xc9, 0x80, 0x8b, 0x2d, 0x28,
	0xc0, 0xd9, 0xb7, 0x38, 0x5d, 0x48, 0x84, 0x8b, 0x35, 0x28, 0xbf, 0xb4, 0x04, 0xa2, 0x81, 0x33,
	0x08, 0xc2, 0xc1, 0xd4, 0x91, 0xc4, 0x06, 0xb6, 0xd4, 0x18, 0x10, 0x00, 0x00, 0xff, 0xff, 0x0c,
	0xf0, 0x57, 0x83, 0x84, 0x00, 0x00, 0x00,
}