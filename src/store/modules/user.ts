import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { UserInfo } from '@/typings';
import store from '@/store';

@Module({ namespaced: true, name: 'user', dynamic: true, store })
export default class UserModule extends VuexModule {
  private userInfo: UserInfo = {};

  @Mutation
  private SET_USER(userInfo: UserInfo) {
    this.userInfo = { ...userInfo };
  }

  get name(): string {
    return <string>this.userInfo.name;
  }

  @Action({ commit: 'SET_USER' })
  public fetchUserInfo(): UserInfo {
    return { name: '柳萌' };
  }
}

export const User = getModule(UserModule);
