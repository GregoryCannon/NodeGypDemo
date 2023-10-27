#include <nan.h>

using namespace v8;

NAN_METHOD(Ping) {
  char const * result = "Pong";
  info.GetReturnValue().Set(Nan::New<String>(result).ToLocalChecked());
}

NAN_MODULE_INIT(Init) {
  Nan::Set(target, Nan::New("ping").ToLocalChecked(),
           Nan::GetFunction(Nan::New<FunctionTemplate>(Ping)).ToLocalChecked());
}

NODE_MODULE(myaddon, Init)
