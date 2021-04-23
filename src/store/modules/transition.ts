import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import store from '@/store';

@Module({ namespaced: true, name: 'loading', dynamic: true, store })
class TransitionModule extends VuexModule {
  private loading = false;

  @Mutation
  private SET_LOADING(loading: boolean) {
    this.loading = loading;
  }

  get isLoading(): boolean {
    return this.loading;
  }

  @Action({ commit: 'SET_LOADING' })
  public setLoading(isLoading: boolean): boolean {
    return isLoading;
  }
}

export const Transition = getModule(TransitionModule);
